"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hsnode_1 = require("hsnode");
const hsnode_2 = require("hsnode");
const log = new hsnode_2.Log('osalib');
const consoleLogPrefix = '<node-osa>';
const consoleLogSuffix = '</node-osa>';
function extractLogs(stderr) {
    const reg = new RegExp(consoleLogPrefix + ' ([\\s\\S]*?) ' + consoleLogSuffix, 'gm');
    const matches = stderr.match(reg);
    return matches ? matches.slice(1).join('\n') : null;
}
exports.extractLogs = extractLogs;
function osaJS(osaFunction, ...args) {
    const jsonArgs = args.map(a => `${JSON.stringify(a)}`).join(',');
    log.debug(`arguments to call: ${jsonArgs}`);
    const consoleLogPatch = `
    var old = console.log; 
    console.log = function () {
        Array.prototype.unshift.call(arguments, "${consoleLogPrefix}"); 
        Array.prototype.push.call(arguments, "${consoleLogSuffix}"); 
        old.apply(console, arguments); 
    }; 
    `.replace(/\n/g, '');
    log.debug(osaFunction.toString());
    const functionCallString = consoleLogPatch + 'JSON.stringify((' + osaFunction.toString() + ')(' + jsonArgs + '));';
    const escapedCall = functionCallString
        .replace(/ +/g, ' ')
        .replace(/'/g, "'\''")
        .split('\n')
        .map(l => l.trim());
    let executeString = "osascript -l JavaScript " + escapedCall.map(l => " -e '" + l + "'").join('');
    log.debug(executeString);
    return hsnode_1.cp.exec(executeString)
        .then((result) => {
        const logResult = extractLogs(result.stderr);
        return { stdout: result.stdout, logResult: logResult };
    })
        .catch((err) => {
        const match = err.toString().match(/(Error on line (\d+)): ([\s\S]*)/i);
        const errLine = !match ? '*?*' : `${match[3].trim()} on line ${match[2]}: '${escapedCall[parseInt(match[2]) - 1]}'`;
        throw { err, errLine };
    });
}
exports.osaJS = osaJS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NhTGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL29zYUxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUE0QjtBQUM1QixtQ0FBNkI7QUFBRSxNQUFNLEdBQUcsR0FBRyxJQUFJLFlBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU83RCxNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQztBQUN0QyxNQUFNLGdCQUFnQixHQUFHLGFBQWEsQ0FBQztBQUV2QyxxQkFBNkIsTUFBYTtJQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRixNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sT0FBTyxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3ZELENBQUM7QUFKRCxrQ0FJQztBQU1ELGVBQXVCLFdBQWUsRUFBRSxHQUFHLElBQVc7SUFNbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFHNUMsTUFBTSxlQUFlLEdBQUc7OzttREFHdUIsZ0JBQWdCO2dEQUNuQixnQkFBZ0I7OztLQUczRCxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFJcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsQyxNQUFNLGtCQUFrQixHQUFHLGVBQWUsR0FBRyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDbkgsTUFBTSxXQUFXLEdBQUcsa0JBQWtCO1NBQ2pDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO1NBRXJCLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDWCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QixJQUFJLGFBQWEsR0FBRywwQkFBMEIsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFbEcsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV6QixPQUFPLFdBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3hCLElBQUksQ0FBQyxDQUFDLE1BQXFDLEVBQUUsRUFBRTtRQUM1QyxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO1NBQ0QsS0FBSyxDQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7UUFDZixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNqSCxNQUFNLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQTNDRCxzQkEyQ0MifQ==