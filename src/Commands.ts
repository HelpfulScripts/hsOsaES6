/**
 * Collection of scripts to be executed in the context of Apple's
 * Open Scripting Architecture (OSA). The interfacing with OSA is done using 
 * {@link https://github.com/brandonhorst/node-osa brandonhorst's node-osa} module.
 */

import { cp }           from 'hsnode';
import { Log }          from 'hsnode';    const log = new Log('hsOSA');
import { OSXcommands}   from './osaCalls';
import { osaJS }        from './osaLib';

/**
 * standard response handler for `osaJS` calls.
 * @param result 
 */
const responseHandler = (cmd:string) => {
    return (result:{stdout:string, logResult:string}):string => {
        log.debug(`call ${cmd} returned`);
        if (result.logResult) { log.info(`messages from executing ${cmd}: ${result.logResult}`); }
        if (result.stdout) { log.debug(`call ${cmd} returned with result ${result.stdout}`); }
        return result.stdout;
    };
};

/**
 * standard error handler for `osaJS` calls
 * @param cmd 
 */
const errorHandler = (cmd:string) => {
    return (result: {err:string, errLine: string}):string => {
        log.error(result.errLine);
        return result.errLine;
    };
};


//---------------------------------------------------------------------------------------
// Export functions

/**
 * Container holding various OSX calls 
 */
export const osa = {
    /**
     * promises to send `message` to a list of buddies in `recipients` using iMessage.
     * @param message the message to send
     * @param appleIDs list of recipients in iMessage
     * @return a promise that resolves to the returned result 
     */
    sendMessage: (appleIDs:string[], message:string, attachments?:string[]):Promise<any> => { 
        log.info(`sending Message to ${appleIDs.join(', ')}, content '${message}', ${attachments?attachments.length:0} attachments`);
        return osaJS(OSXcommands.osaSendMessage, appleIDs, message, attachments)
            .then(responseHandler('osaSendMessage'))
            .catch(errorHandler('osaSendMessage ' + message));
    },

    /**
     * sends an email to the list of addresses.
     * @param subject the subject of the message to send
     * @param addresses an array of recipient email addresses
     * @param content optional; the content of the message to send
     * @return a promise that resolves to the returned result 
     * @todo enable for multiple `to`s
     */
    sendEmail: (subject:string, to:string[], content='', attachments?:string[]):Promise<any> => { 
        log.info(`sending email to '${to.join(', ')}' with subject '${subject}', content '${content}', ${attachments?attachments.length:0} attachments`);
        return osaJS(OSXcommands.osaSendEmail, subject, to[0], content, attachments)
            .then(responseHandler('osaSendEmail'))
            .catch(errorHandler('osaSendEmail ' + subject));
    },

    /**
     * sends an email to the list of addresses.
     * @param subject the subject of the message to send
     * @param addresses an array of recipient email addresses
     * @param content optional; the content of the message to send
     * @return a promise that resolves to the returned result 
     * @todo enable for multiple `to`s
     */
    getEmail: (date:Date):Promise<any> => { 
        log.debug(`getting emails`);
        return osaJS(OSXcommands.osaGetEmail, date)
            .then(responseHandler('osaGetEmail'))
            .catch(errorHandler('osaGetEmail'));
    },

    /**
     * initiates a facetime call to the specified buddy.
     * @param appleID the buddy to initiate a facetime call to
     * @return a promise that resolves to the returned result 
     */
    facetime: (appleID:string) :Promise<any>=> { 
        log.info('starting facetime call with ' + appleID);
        return cp.exec('open facetime://' + appleID)
            .catch(errorHandler('facetime ' + appleID));
    },

    /**
     * speaks the provided `text`.
     * @param text the text to speak.
     * @return a promise that resolves to the returned result 
     */
    say: (text:string):Promise<any> => { 
        log.info('saying \'' + text + '\'');
        return osaJS(OSXcommands.osaSay, text)
            .then(responseHandler('osaSay'))
            .then(() => `I said '${text}'`)
            .catch(errorHandler('osaSay ' + text));
    },

    /**
     * launches an application. 
     * @param name the application to launch.  
     * @return a promise that resolves to True if the application is running, else False 
     */
    launch: (name:string):Promise<any> => { 
        log.info('launching \'' + name + '\'');
        return osaJS(OSXcommands.osaLaunch, name)
            .then(responseHandler('osaLaunch'))
            .then(result => {
                log.info(name + ' running: ' + result);
                return result? true : false;
            })
            .catch(errorHandler('osaLaunch ' + name));
    },

    /**
     * launches an script. 
     * @param name the script to launch.  
     * @return a promise that resolves to True if the script is running, else False 
     */
    launchScript: (name:string):Promise<any> => { 
        log.info('launching \'' + name + '\'');
        return osaJS(OSXcommands.osaLaunchScript, name)
            .then(responseHandler('osaLaunchScript'))
            .then(result => {
                log.info(name + ' running: ' + result);
                return result? true : false;
            })
            .catch(errorHandler('osaLaunchScript ' + name));
    },


    /**
     * quits an application. 
     * @param name the application to quit.
     * @return a promise that resolves to True if the application has quit, else False 
     */
    quit: (name:string):Promise<any> => { 
        let i = name.lastIndexOf('/');
        if (i>0) { name = name.substr(i+1); }
        log.info('quitting \'' + name + '\'');
        return osaJS(OSXcommands.osaQuit, name)
            .then(responseHandler('osaQuit'))
            .then(result => {
                log.debug(name + ' running: ' + result);
                return result? false : true;
            })
            .catch(errorHandler('osaQuit ' + name));
    },

    /**
     * checks if an application is running. 
     * @param name the application to check.
     * @return a promise that resolves to True if the application is running, else False 
     */
    isRunning: (name:string):Promise<any> => {
        name = name.substring(name.lastIndexOf('/')+1,name.lastIndexOf('.'));
        log.info('checking if \'' + name + '\' is running');
        return cp.exec('ps -cx')
            .then(result => (result.stdout.indexOf(name) > 0))
            .catch(errorHandler('isRunning ' + name));
    },

    /**
     * sets the brightness of the screen to the specified value 
     * @param value the new brightness value (0...1).
     * @return a promise that resolves to undefined 
     */
    setBrightness: (value:number):Promise<any> => {
        log.info('setting brightness to ' + value);
        return osaJS(OSXcommands.osaBrightness, value)
            .then(responseHandler('osaBrightness'))
            .catch(errorHandler('osaBrightness ' + value));
    },

    /**
     * sets the system audio volume to the specified value.
     * @param value the new volume value (0...7).
     * @return a promise that resolves to undefined 
     */
    setVolume: (value:number):Promise<any> => {
        log.info('setting volume to ' + value);
        return osaJS(OSXcommands.osaVolume, value)
            .then(responseHandler('osaVolume'))
            .catch(errorHandler('osaVolume ' + value));
    },

    /**
     * sets the system audio volume to the specified value. 
     * @return a promise that resolves to undefined 
     */
    restart: ():Promise<any> => {
        log.info('restarting...');
        return osaJS(OSXcommands.osaRestart)
            .then(responseHandler('osaRestart'))
            .catch(errorHandler('osaRestart '));
    }
};