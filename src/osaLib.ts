
import * as hsNode  from 'hsnode';  
const log = hsNode.log('osalib');
const exec = hsNode.node.child_process.exec;

// export function osa
// takes a function, any number of arguments, and a callback.
// It will run the function in the OSA environment, passing in any given arguements.
// that function is expected to return a single value, which will be passed back to the
// callback via stdout.
const consoleLogPrefix = '<node-osa>';
const consoleLogSuffix = '</node-osa>';

export function extractLogs (stderr:string) {
    const reg = new RegExp(consoleLogPrefix + ' ([\\s\\S]*?) ' + consoleLogSuffix, 'gm');
    const matches = stderr.match(reg); // all matches, preceeded by the entire string at matches[0]
    return matches? matches.slice(1).join('\n') : null;
}

/** 
 * @description returns a promise to execute osaString.
 * @return a promise with resolve(stdout, errors) and reject(error, errorLine)
 */
export function osaJS (osaFunction:any, ...args: any[]):Promise<any> {
    // get an array of arguments, excluding the osaFunction
//    const args = Array.prototype.slice.call(arguments, 1, arguments.length);

    // conver these args to json
    // to do: replace ':' in a
    const jsonArgs = args.map(a => `${JSON.stringify(a)}`).join(',');
    log.debug(`arguments to call: ${jsonArgs}`);
  
    // augment console.log to encapsulate logs with <node-osa>...</node-osa> tags
    const consoleLogPatch = `
    var old = console.log; 
    console.log = function () {
        Array.prototype.unshift.call(arguments, "${consoleLogPrefix}"); 
        Array.prototype.push.call(arguments, "${consoleLogSuffix}"); 
        old.apply(console, arguments); 
    }; 
    `.replace(/\n/g,''); // remove the line feeds added above for readability

    // build a string to call osaFunction, pass in args, and evaulate to
    // the JSON representation of the return value, then call it with osascript
    log.debug(osaFunction.toString());
    const functionCallString = consoleLogPatch + 'JSON.stringify((' + osaFunction.toString() + ')(' + jsonArgs + '));';
    const escapedCall = functionCallString
        .replace(/ +/g, ' ')      // replace multiple whitespaces by single whitespaces
        .replace(/'/g, "'\''")     // replace ' by '\''
//        .replace(/@/g, "\\@")     // replace @ by \@
        .split('\n')                // create multiple lines
        .map(l => l.trim());
    let executeString = "osascript -l JavaScript " + escapedCall.map(l => " -e '" + l + "'").join('');

    log.debug(executeString);
    // execute osascript as promise
    return exec(executeString)
        .then((result:{stdout:string, stderr:string}) => {
            const logResult = extractLogs(result.stderr);
            return {stdout:result.stdout, logResult:logResult};
        })
        .catch((err:any) => {
            const match = err.toString().match(/(Error on line (\d+)): ([\s\S]*)/i);
            const errLine = !match? '*?*' : `${match[3].trim()} on line ${match[2]}: '${escapedCall[parseInt(match[2])-1]}'`; 
            throw {err, errLine};
        });
}


