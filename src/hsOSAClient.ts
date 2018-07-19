/**
 * Collection of client-side (OSA-side) OSX scripts to be executed in the context of Apple's
 * Open Scripting Architecture (OSA).
 */
export const OSXcommands = {
    /**
     * sends a message via thew OSX Messages app
     */
    osaSendMessage: `function(message, recipients) {
        function getService(services) {
            for (let s=0; s<services.length; s++) {
                if (services[s].serviceType() === "iMessage") {  return services[s];  }
            }
            return undefined;
        }
        function getChat(recipients, services) {
            const service = getService(services);
            if (!service) { return undefined; }
            const chats = service.chats;
            for (let c=0; c<chats.length; c++) {
                return chats[c]; 
            }
            return undefined;
        }
        
        function getBuddy(recipient, services) {
            for (let s=0; s<services.length; s++) {
                const service = services[s];
                if (service.serviceType() === "iMessage") {
                    const buddies = service.buddies;
                    for (let b=0; b<buddies.length; b++) {
                        const buddy = buddies[b];
                        if (buddy.handle() === recipient) {
                            return buddy;
                        }
                    }
                }
            }
            return undefined;
        }
    
        const iMessage = Application("Messages");
        iMessage.includeStandardAdditions = true;
        
        if (message.indexOf("/")===0) { message = Path(message); }
        const chat = getChat(recipients, iMessage.services);
        if (chat) { 
            iMessage.send(message, {to:chat}); }
        else {
            for (let r=0; r<recipients.length; r++) {
                const buddy = getBuddy(recipients[r], iMessage.services);
                if (buddy) { 
                    iMessage.send(message, {to:buddy}); 
                }
            }
        }
        return "done"; 
    }`,
    /**
     * sends an email vis thew OSX Mail app
     */
    osaSendEmail: `function(subject, address, content, attachments) {
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
    }`,
    /**
     * speaks a text on OSX Speech Services
     */
    osaSay: `function(text) {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(3);
        app.say(text, {using:"Allison"});
        app.setVolume(0);
        return true;
    }`,
    /**
     * launches an OSX app
     */
    osaLaunch: `function(name) {  
        const app = Application(name);
        app.includeStandardAdditions = true;
        app.activate();
        return true;
    }`,
    /**
     * launches a script on OSX
     */
    osaLaunchScript: `name => {  
        const app = Application(name);
        app.launch();
        app.run();
        return true;
    }`,
    /**
     * Quits an OSX app
     */
    osaQuit: `name => {
        const app = Application(name);
        app.quit();
        return true;
    }`,
    /** 
     * Initiates a Facetime call on OSX
     */
    osaCallFacetime: `() => {
        const app = Application("System Events");
        const prc = app.applicationProcesses.whose({name:"FaceTime"})[0];
        const win = prc.windows[0];
        const btn = win.buttons.whose({name:"Call"})[0];
        btn.click();
        return true;
    }`,
    /**
     * Sets the screen brightness on OSX
     */
    osaBrightness: `value => {
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
    }`,
    /**
     * Sets the OSX System Volume
     */
    osaVolume: `value => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(parseInt(value));
        return true;
    }`,
    /**
     * Restarts OSX
     */
    osaRestart: `() => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.restart();
        return true;
    }`
};

