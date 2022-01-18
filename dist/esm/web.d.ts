import { WebPlugin } from '@capacitor/core';
import { JitsiPlugin } from './definitions';
export declare class JitsiWeb extends WebPlugin implements JitsiPlugin {
    joinConference(options: {
        roomName: string;
        url: string;
        token: string;
        channelLastN: string;
        displayName: string;
        email: string;
        avatarURL: string;
        startWithAudioMuted: boolean;
        startWithVideoMuted: boolean;
        chatEnabled: boolean;
        inviteEnabled: boolean;
        callIntegrationEnabled: boolean;
    }): Promise<{
        roomName: string;
        url: string;
        token: string;
        channelLastN: string;
        displayName: string;
        email: string;
        avatarURL: string;
        startWithAudioMuted: boolean;
        startWithVideoMuted: boolean;
        chatEnabled: boolean;
        inviteEnabled: boolean;
        callIntegrationEnabled: boolean;
    }>;
    leaveConference(options: {}): Promise<{}>;
}
declare const Jitsi: JitsiWeb;
export { Jitsi };
