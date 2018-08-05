export declare const osa: {
    sendMessage: (appleIDs: string[], message: string, attachments?: string[]) => Promise<any>;
    sendEmail: (subject: string, to: string[], content?: string, attachments?: string[]) => Promise<any>;
    getEmail: (date: Date) => Promise<any>;
    facetime: (appleID: string) => Promise<any>;
    say: (text: string) => Promise<any>;
    launch: (name: string) => Promise<any>;
    launchScript: (name: string) => Promise<any>;
    quit: (name: string) => Promise<any>;
    isRunning: (name: string) => Promise<any>;
    setBrightness: (value: number) => Promise<any>;
    setVolume: (value: number) => Promise<any>;
    restart: () => Promise<any>;
};
