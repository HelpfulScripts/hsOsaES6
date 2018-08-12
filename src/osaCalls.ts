/**
 * ## osaCalls
 * 
 * {@link osaCalls.OSXcomands} provides Javascript functions that run within Apple's OSA context.
 * These functions are called internally by {@link Commands.osaCommands osaCommands}.
 * The implementation is in Typescript to benefit from as much compiler help as possible.
 */

/** declares the Path function available within OSA. */
declare function Path(name:string):any;

/** declares the delay function available within OSA */
declare function delay(ms:number):void;

/** declares the Application interface availabkle withon OSA */
declare interface ApplicationIF {
    (name?:string):any;
    currentApplication: ()=>any;
  }

/** declares the Application object available within OSA */
declare const Application:ApplicationIF;


/**
 * Collection of client-side (OSA-side) OSX scripts to be executed in the context of Apple's
 * Open Scripting Architecture (OSA).
 */
export const OSXcommands = {
    osaGetMessage: function(updatedSince:Date) {
        const Messages = Application("Messages");
        Messages.includeStandardAdditions = true;
    },
    /**
     * sends a message via thew OSX Messages app
     */
    osaSendMessage: function(appleIDs:string[], message:string, attachments:string[]) {    
        const Messages = Application("Messages");
        Messages.includeStandardAdditions = true;
        const buddies = appleIDs.map((a:string) => Messages.buddies.whose({ handle: a })[0]);

        Messages.send(message, { to: buddies[0] });
        if (attachments && attachments.length>0) {
            attachments.forEach((a:string) => Messages.send(Path(a), { to: buddies[0] }));
        }
    },
    /**
     * sends an email vis thew OSX Mail app
     */
    osaSendEmail: function(subject:string, address:string, content:string, attachments:string[]) {
        const Mail = Application("Mail");
        Mail.activate();
        Mail.includeStandardAdditions = true;
        const message = Mail.OutgoingMessage().make();
        message.subject = subject;
        message.content = content;
        message.visible = true;
        //for (let i=0; i<addresses.length; i++) {
            message.toRecipients.push(Mail.Recipient({ address: address }));
        //}
        if (attachments) {
            for (let i=0; i<attachments.length; i++) {
                message.attachments.push(Mail.Attachment({fileName: attachments[i]}));
            }
        }
        //Mail.outgoingMessages.push(message);
        delay(5);
        message.send();        
    },
    /**
     * sends an email vis thew OSX Mail app
     */
    osaGetEmail: function(date:string) {
        const Mail = Application("Mail");
        Mail.activate();
        Mail.includeStandardAdditions = true;
        Mail.checkForNewMail();

        const result:any[] = [];
        Mail.accounts().forEach((acc:any) => {
            const inbox = acc.mailboxes().filter((mb:any) => mb.name().toLowerCase()==="inbox")[0];
            const newMsgs = inbox.messages().filter((m:any) => Date.parse(m.dateReceived()) >= Date.parse(date));
            result.push({
                mailboxes:    acc.mailboxes().length,
                account:      acc.name(),
                inbox:        inbox.name(),
                numMsgTotal:  inbox.messages().length,
                numMsgNew:    newMsgs.length,
                dateSince:    date,
                msgSinceDate: newMsgs.map((m:any) => { return {from: m.sender(), subject: m.subject(), received: m.dateReceived(), id: m.id()};})
            });
        });
        return result;
    },
    /**
     * speaks a text on OSX Speech Services
     */
    osaSay: function(text:string) {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(3);
        app.say(text, {using:"Allison"});
        app.setVolume(0);
        return true;
    },
    /**
     * launches an OSX app
     */
    osaLaunch: function(name:string) {  
        const app = Application(name);
        app.includeStandardAdditions = true;
        app.activate();
        return true;
    },
    /**
     * launches a script on OSX
     */
    osaLaunchScript: (name:string) => {  
        const app = Application(name);
        app.launch();
        app.run();
        return true;
    },
    /**
     * Quits an OSX app
     */
    osaQuit: (name:string) => {
        const app = Application(name);
        app.quit();
        return true;
    },
    /** 
     * Initiates a Facetime call on OSX
     */
    osaCallFacetime: () => {
        const app = Application("System Events");
        const prc = app.applicationProcesses.whose({name:"FaceTime"})[0];
        const win = prc.windows[0];
        const btn = win.buttons.whose({name:"Call"})[0];
        btn.click();
        return true;
    },
    /**
     * Sets the screen brightness on OSX
     */
    osaBrightness: (value:number) => {
        const Prefs = Application("System Preferences");
        Prefs.includeStandardAdditions = true;
        Prefs.activate();
        const pane = Prefs.panes.whose({id:"com.apple.preference.displays"})[0];
        const anchor = pane.anchors.whose({name: "displaysDisplayTab"})[0];
        Prefs.reveal(anchor);
        delay(1);
        const System = Application("System Events");
        const process = System.processes.whose({name:"System Preferences"})[0];
        const window = process.windows[0];
        const tabgroup = window.tabGroups[0];
        const group = tabgroup.groups[0];
        const slider = group.sliders[0];
        slider.value = value;
        delay(1);
        Prefs.quit();
        return true;
    },
    /**
     * Sets the OSX System Volume
     */
    osaVolume: (value:string) => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(parseInt(value));
        return true;
    },
    /**
     * Sets the OSX System Volume
     */
    osaVolumeSettings: () => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        const settings = app.getVolumeSettings();
        return settings;
    },
    /**
     * Restarts OSX
     */
    osaRestart: () => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.restart();
        return true;
    }
};

