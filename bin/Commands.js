"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hsnode_1 = require("hsnode");
const hsnode_2 = require("hsnode");
const log = new hsnode_2.Log('hsOSA');
const osaCalls_1 = require("./osaCalls");
const osaLib_1 = require("./osaLib");
const responseHandler = (cmd) => {
    return (result) => {
        log.debug(`call ${cmd} returned`);
        if (result.logResult) {
            log.info(`messages from executing ${cmd}: ${result.logResult}`);
        }
        if (result.stdout) {
            log.debug(`call ${cmd} returned with result ${result.stdout}`);
        }
        return result.stdout;
    };
};
const errorHandler = (cmd) => {
    return (result) => {
        log.error(result.errLine);
        return result.errLine;
    };
};
exports.osa = {
    sendMessage: (appleIDs, message, attachments) => {
        log.info(`sending Message to ${appleIDs.join(', ')}, content '${message}', ${attachments ? attachments.length : 0} attachments`);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaSendMessage, appleIDs, message, attachments)
            .then(responseHandler('osaSendMessage'))
            .catch(errorHandler('osaSendMessage ' + message));
    },
    sendEmail: (subject, to, content = '', attachments) => {
        log.info(`sending email to '${to.join(', ')}' with subject '${subject}', content '${content}', ${attachments ? attachments.length : 0} attachments`);
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
        log.info('starting facetime call with ' + appleID);
        return hsnode_1.cp.exec('open facetime://' + appleID)
            .catch(errorHandler('facetime ' + appleID));
    },
    say: (text) => {
        log.info('saying \'' + text + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaSay, text)
            .then(responseHandler('osaSay'))
            .then(() => `I said '${text}'`)
            .catch(errorHandler('osaSay ' + text));
    },
    launch: (name) => {
        log.info('launching \'' + name + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaLaunch, name)
            .then(responseHandler('osaLaunch'))
            .then(result => {
            log.info(name + ' running: ' + result);
            return result ? true : false;
        })
            .catch(errorHandler('osaLaunch ' + name));
    },
    launchScript: (name) => {
        log.info('launching \'' + name + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaLaunchScript, name)
            .then(responseHandler('osaLaunchScript'))
            .then(result => {
            log.info(name + ' running: ' + result);
            return result ? true : false;
        })
            .catch(errorHandler('osaLaunchScript ' + name));
    },
    quit: (name) => {
        let i = name.lastIndexOf('/');
        if (i > 0) {
            name = name.substr(i + 1);
        }
        log.info('quitting \'' + name + '\'');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaQuit, name)
            .then(responseHandler('osaQuit'))
            .then(result => {
            log.debug(name + ' running: ' + result);
            return result ? false : true;
        })
            .catch(errorHandler('osaQuit ' + name));
    },
    isRunning: (name) => {
        name = name.substring(name.lastIndexOf('/') + 1, name.lastIndexOf('.'));
        log.info('checking if \'' + name + '\' is running');
        return hsnode_1.cp.exec('ps -cx')
            .then(result => (result.stdout.indexOf(name) > 0))
            .catch(errorHandler('isRunning ' + name));
    },
    setBrightness: (value) => {
        log.info('setting brightness to ' + value);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaBrightness, value)
            .then(responseHandler('osaBrightness'))
            .catch(errorHandler('osaBrightness ' + value));
    },
    setVolume: (value) => {
        log.info('setting volume to ' + value);
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaVolume, value)
            .then(responseHandler('osaVolume'))
            .catch(errorHandler('osaVolume ' + value));
    },
    restart: () => {
        log.info('restarting...');
        return osaLib_1.osaJS(osaCalls_1.OSXcommands.osaRestart)
            .then(responseHandler('osaRestart'))
            .catch(errorHandler('osaRestart '));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQ29tbWFuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQSxtQ0FBc0M7QUFDdEMsbUNBQXNDO0FBQUksTUFBTSxHQUFHLEdBQUcsSUFBSSxZQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkUseUNBQTBDO0FBQzFDLHFDQUF3QztBQU14QyxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQVUsRUFBRSxFQUFFO0lBQ25DLE9BQU8sQ0FBQyxNQUF3QyxFQUFTLEVBQUU7UUFDdkQsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDbEMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQUUsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDMUYsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcseUJBQXlCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDdEYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQU1GLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLE1BQXFDLEVBQVMsRUFBRTtRQUNwRCxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBU1csUUFBQSxHQUFHLEdBQUc7SUFPZixXQUFXLEVBQUUsQ0FBQyxRQUFpQixFQUFFLE9BQWMsRUFBRSxXQUFxQixFQUFlLEVBQUU7UUFDbkYsR0FBRyxDQUFDLElBQUksQ0FBQyxz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