import { osaCommands } from './osaCommands';
import { Log } from 'hsnode'; const log = new Log('osaCommandsJests');

describe('OSA Commands', ()=>{
    describe('setVolume', ()=>{
        test('setVolume to 1', () => 
            osaCommands.setVolume(1)
            .then((res) => {
                log.debug(`setVolume: ${res}`);
                return expect(res).toBe(true);
            })
        );
    });
    describe('getVolume', ()=>{
        test('getVolume', () =>
            osaCommands.getVolume()
            .then((res) => {
                log.debug(`getVolume: ${res}`);
                expect(res).toHaveProperty('alertVolume');
                expect(res).toHaveProperty('outputVolume');
                return expect(res.outputVolume).toEqual(14);
            })
        );
    });
    describe('setBrightness', ()=>{
        // beforeAll(() => log.level(log.DEBUG));
        // afterAll(() => log.level(log.INFO));
        test('setBrightness', () =>
            osaCommands.setBrightness(0.9)
            .then((res) => {
                log.debug(`setBrightness: ${typeof res} ${res}`);
                if (typeof res==='string') {
                    return expect(res).toMatch(/osascript is not allowed assistive access/);
                } else {
                    return expect(res).toEqual(true);
                }
            })
        );
    });
    describe('launch', ()=>{
        test('launch', () =>
            osaCommands.launch('Mail')
            .then((res) => {
                log.debug(`launch: ${res}`);
                return expect(res).toEqual(true);
            })
        );
    });
    describe('isRunning', ()=>{
        test('isRunning', () =>
            osaCommands.launch('Mail')
            .then(()=> osaCommands.isRunning('Mail'))
            .then((res) => {
                log.debug(`isRunning: ${res}`);
                return expect(res).toEqual(true);
            })
        );
    });
    describe('quit', ()=>{
        test('quit', () =>
            osaCommands.quit('Mail')
            .then((res) => {
                log.debug(`quit: ${res}`);
                return expect(res).toEqual(false);
            })
        );
    });
    describe('sendMessage', ()=>{
    });
    describe('sendEmail', ()=>{
    });
    describe('getEmail', ()=>{
    });
    describe('facetime', ()=>{
    });
    describe('say', ()=>{
    });
    describe('launchScript', ()=>{
    });
    describe('restart', ()=>{
    });
});