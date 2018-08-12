"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSXcommands = {
    osaGetMessage: function (updatedSince) {
        const Messages = Application("Messages");
        Messages.includeStandardAdditions = true;
    },
    osaSendMessage: function (appleIDs, message, attachments) {
        const Messages = Application("Messages");
        Messages.includeStandardAdditions = true;
        const buddies = appleIDs.map((a) => Messages.buddies.whose({ handle: a })[0]);
        Messages.send(message, { to: buddies[0] });
        if (attachments && attachments.length > 0) {
            attachments.forEach((a) => Messages.send(Path(a), { to: buddies[0] }));
        }
    },
    osaSendEmail: function (subject, address, content, attachments) {
        const Mail = Application("Mail");
        Mail.activate();
        Mail.includeStandardAdditions = true;
        const message = Mail.OutgoingMessage().make();
        message.subject = subject;
        message.content = content;
        message.visible = true;
        message.toRecipients.push(Mail.Recipient({ address: address }));
        if (attachments) {
            for (let i = 0; i < attachments.length; i++) {
                message.attachments.push(Mail.Attachment({ fileName: attachments[i] }));
            }
        }
        delay(5);
        message.send();
    },
    osaGetEmail: function (date) {
        const Mail = Application("Mail");
        Mail.activate();
        Mail.includeStandardAdditions = true;
        Mail.checkForNewMail();
        const result = [];
        Mail.accounts().forEach((acc) => {
            const inbox = acc.mailboxes().filter((mb) => mb.name().toLowerCase() === "inbox")[0];
            const newMsgs = inbox.messages().filter((m) => Date.parse(m.dateReceived()) >= Date.parse(date));
            result.push({
                mailboxes: acc.mailboxes().length,
                account: acc.name(),
                inbox: inbox.name(),
                numMsgTotal: inbox.messages().length,
                numMsgNew: newMsgs.length,
                dateSince: date,
                msgSinceDate: newMsgs.map((m) => { return { from: m.sender(), subject: m.subject(), received: m.dateReceived(), id: m.id() }; })
            });
        });
        return result;
    },
    osaSay: function (text) {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(3);
        app.say(text, { using: "Allison" });
        app.setVolume(0);
        return true;
    },
    osaLaunch: function (name) {
        const app = Application(name);
        app.includeStandardAdditions = true;
        app.activate();
        return true;
    },
    osaLaunchScript: (name) => {
        const app = Application(name);
        app.launch();
        app.run();
        return true;
    },
    osaQuit: (name) => {
        const app = Application(name);
        app.quit();
        return true;
    },
    osaCallFacetime: () => {
        const app = Application("System Events");
        const prc = app.applicationProcesses.whose({ name: "FaceTime" })[0];
        const win = prc.windows[0];
        const btn = win.buttons.whose({ name: "Call" })[0];
        btn.click();
        return true;
    },
    osaBrightness: (value) => {
        const Prefs = Application("System Preferences");
        Prefs.includeStandardAdditions = true;
        Prefs.activate();
        const pane = Prefs.panes.whose({ id: "com.apple.preference.displays" })[0];
        const anchor = pane.anchors.whose({ name: "displaysDisplayTab" })[0];
        Prefs.reveal(anchor);
        delay(1);
        const System = Application("System Events");
        const process = System.processes.whose({ name: "System Preferences" })[0];
        const window = process.windows[0];
        const tabgroup = window.tabGroups[0];
        const group = tabgroup.groups[0];
        const slider = group.sliders[0];
        slider.value = value;
        delay(1);
        Prefs.quit();
        return true;
    },
    osaVolume: (value) => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.setVolume(parseInt(value));
        return true;
    },
    osaVolumeSettings: () => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        const settings = app.getVolumeSettings();
        return settings;
    },
    osaRestart: () => {
        const app = Application.currentApplication();
        app.includeStandardAdditions = true;
        app.restart();
        return true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NhQ2FsbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvb3NhQ2FsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE0QmEsUUFBQSxXQUFXLEdBQUc7SUFDdkIsYUFBYSxFQUFFLFVBQVMsWUFBaUI7UUFDckMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUlELGNBQWMsRUFBRSxVQUFTLFFBQWlCLEVBQUUsT0FBYyxFQUFFLFdBQW9CO1FBQzVFLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVyRixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFO1lBQ3JDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFJRCxZQUFZLEVBQUUsVUFBUyxPQUFjLEVBQUUsT0FBYyxFQUFFLE9BQWMsRUFBRSxXQUFvQjtRQUN2RixN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