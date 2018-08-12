/**
 * # hsOsaES6
 * 
 * Helpful Scripts ES6 interface to various OSX functions using the OSA Architecture. 
 * [`[Github page]`](https://github.com/HelpfulScripts/hsOsaES6)
 * [`[Coverage Info]`](./data/src/hsOsaES6/coverage/)
 * ___
 * 
 * Provides a means for calling JavaScript functions in Apple's OSA environment. 
 * At the core, the function {@link osaLib.osaJS osaJS} is a port from [brandonhorst's node-osa](https://github.com/brandonhorst/node-osa) module,
 * in ES6 using Typescript and promises.
 * 
 * `osaJs` is internally called by a number of OSX convenience functions exported as 
 * {@link Commands.osaCommands osaCommands}.
 * Currently available functions are:
 * - &nbsp; {@link Commands.osaCommands.facetime      facetime}      starts a facetime call with a buddy
 * - &nbsp; {@link Commands.osaCommands.getEmail      getEmail}      gets recent emails from `Mail`
 * - &nbsp; {@link Commands.osaCommands.sendEmail     sendEmail}     sends an email using `Mail`
 * - &nbsp; {@link Commands.osaCommands.launch        launch}        launches an application (such as `Mail`)
 * - &nbsp; {@link Commands.osaCommands.isRunning     isRunning}     checks if an application is running
 * - &nbsp; {@link Commands.osaCommands.quit          quit}          quits a running application
 * - &nbsp; {@link Commands.osaCommands.launchScript  launchScript}  launches another OSA script
 * - &nbsp; {@link Commands.osaCommands.restart       restart}       restarts the Mac
 * - &nbsp; {@link Commands.osaCommands.sendMessage   sendMessage}   sends a text message to a buddy via `Messages`
 * - &nbsp; {@link Commands.osaCommands.setVolume     setVolume}     sets the speaker volume 
 * - &nbsp; {@link Commands.osaCommands.say           say}           speaks a text string using the built-in voice synthesis
 * - &nbsp; {@link Commands.osaCommands.setBrightness setBrightness} sets the screen brightness
 * 
 */

 /** */