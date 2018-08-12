"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hsnode_1 = require("hsnode");
const hsnode_2 = require("hsnode");
const log = new hsnode_2.Log('osaCommands');
const osaCalls_1 = require("./osaCalls");
const osaLib_1 = require("./osaLib");
const responseHandler = (cmd) => {
    return (result) => {
        if (result.logResult) {
            log.debug(`messages from executing ${cmd}: ${result.logResult}`);
        }
        if (result.stdout) {
            log.debug(`call ${cmd} returned with result ${result.stdout}, ${typeof result.stdout}`);
            return JSON.parse(result.stdout);
        }
        else {
            log.debug(`call ${cmd} returned without stdout`);
            return;
        }
    };
};
const errorHandler = (cmd) => {
    return (result) => {
        log.error(result.errLine);
        return result.errLine;
    };
};
exports.osaCommands = {
    sendMessage: (appleIDs, message, attachments) => {
        log.debug(`sending Message to ${appleIDs.join(', ')}, content '${message}', ${attachments ? attachments.length : 0} attachments`);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaSendMessage, appleIDs, message, attachments)
            .then(responseHandler('osaSendMessage'))
            .catch(errorHandler('osaSendMessage ' + message));
    },
    sendEmail: (subject, to, content = '', attachments) => {
        log.debug(`sending email to '${to.join(', ')}' with subject '${subject}', content '${content}', ${attachments ? attachments.length : 0} attachments`);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaSendEmail, subject, to[0], content, attachments)
            .then(responseHandler('osaSendEmail'))
            .catch(errorHandler('osaSendEmail ' + subject));
    },
    getEmail: (date) => {
        log.debug(`getting emails`);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaGetEmail, date)
            .then(responseHandler('osaGetEmail'))
            .catch(errorHandler('osaGetEmail'));
    },
    facetime: (appleID) => {
        log.debug('starting facetime call with ' + appleID);
        return hsnode_1.cp.exec('open facetime://' + appleID)
            .catch(errorHandler('facetime ' + appleID));
    },
    say: (text) => {
        log.debug('saying \'' + text + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaSay, text)
            .then(responseHandler('osaSay'))
            .then(() => `I said '${text}'`)
            .catch(errorHandler('osaSay ' + text));
    },
    launch: (name) => {
        log.debug('launching \'' + name + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaLaunch, name)
            .then(responseHandler('osaLaunch'))
            .then(result => {
            log.debug(name + ' running: ' + result);
            return result ? true : false;
        })
            .catch(errorHandler('osaLaunch ' + name));
    },
    launchScript: (name) => {
        log.debug('launching \'' + name + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaLaunchScript, name)
            .then(responseHandler('osaLaunchScript'))
            .then(result => {
            log.debug(name + ' running: ' + result);
            return result ? true : false;
        })
            .catch(errorHandler('osaLaunchScript ' + name));
    },
    quit: (name) => {
        let i = name.lastIndexOf('/');
        if (i > 0) {
            name = name.substr(i + 1);
        }
        log.debug('quitting \'' + name + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaQuit, name)
            .then(responseHandler('osaQuit'))
            .then(result => {
            log.debug(name + ' running: ' + result);
            return result ? false : true;
        })
            .catch(errorHandler('osaQuit ' + name));
    },
    isRunning: (name) => {
        const slash = name.lastIndexOf('/');
        if (slash >= 0) {
            name = name.substring(slash + 1, name.lastIndexOf('.'));
        }
        log.debug(`checking if '${name}' is running`);
        return hsnode_1.cp.exec('ps -cx')
            .then(result => {
            log.debug(`isRunning result: ${result.stdout.indexOf(name)} ${result.stdout}`);
            return (result.stdout.indexOf(name) > 0);
        })
            .catch(errorHandler('isRunning ' + name));
    },
    setBrightness: (value) => {
        log.debug('setting brightness to ' + value);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaBrightness, value)
            .then(responseHandler('osaBrightness'))
            .catch(errorHandler('osaBrightness ' + value));
    },
    setVolume: (value) => {
        log.debug('setting volume to ' + value);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaVolume, value)
            .then(responseHandler('osaVolume'))
            .catch(errorHandler('osaVolume ' + value));
    },
    getVolume: () => {
        log.debug('getting volume');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaVolumeSettings)
            .then(responseHandler('osaVolumeSettings'))
            .catch(errorHandler('osaVolumeSettings'));
    },
    restart: () => {
        log.debug('restarting...');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaRestart)
            .then(responseHandler('osaRestart'))
            .catch(errorHandler('osaRestart '));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NhQ29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvb3NhQ29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxtQ0FBc0M7QUFDdEMsbUNBQXNDO0FBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxZQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0UseUNBQTBDO0FBQzFDLHFDQUF3QztBQVF4QyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVUsRUFBRSxFQUFFO0lBQ25DLE9BQU8sQ0FBQyxNQUF3QyxFQUFTLEVBQUU7UUFDdkQsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDM0YsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2YsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcseUJBQXlCLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN4RixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRywwQkFBMEIsQ0FBQyxDQUFDO1lBQ2pELE9BQU87U0FDVjtJQUNMLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQU1GLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLE1BQXFDLEVBQVMsRUFBRTtRQUNwRCxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBU1csUUFBQSxXQUFXLEdBQUc7SUFPdkIs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