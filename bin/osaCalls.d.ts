export declare const OSXcommands: {
    osaGetMessage: (updatedSince: Date) => void;
    osaSendMessage: (appleIDs: string[], message: string, attachments: string[]) => void;
    osaSendEmail: (subject: string, address: string, content: string, attachments: string[]) => void;
    osaGetEmail: (date: string) => any[];
    osaSay: (text: string) => boolean;
    osaLaunch: (name: string) => boolean;
    osaLaunchScript: (name: string) => boolean;
    osaQuit: (name: string) => boolean;
    osaCallFacetime: () => boolean;
    osaBrightness: (value: number) => boolean;
    osaVolume: (value: string) => boolean;
    osaRestart: () => boolean;
};
