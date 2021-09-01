import Message from "./Message";

// every 'any' is because im not sure about the type of the field

interface Aliases {
    alias: string;
    discriminator: string | null;
    name: string;
    createdAt: Date;
    userId: string;
    gameId: number;
    socialLinkSource: string | null;
    aditionalInfo: Object;
    editedAt: Date;
    socialLinkHandle: any;
    playerInfo: any;
}

export default interface User {
    user: {
        id?: string;
        name?: string;
        subdomain?: string;
        aliases?: Array<Aliases>;
        email?: string | null;
        profilePictureSm?: string | null;
        profilePicture?: string | null;
        profilePictureLg?: string | null;
        profilePictureBlur?: string | null;
        profileBannerBlur?: string | null;
        profileBannerLg?: string | null;
        profileBannerSm?: string | null;
        joinDate?: Date;
        steamId?: string | null;
        userStatus?: Message | null;
        moderationStatus?: any;
        aboutInfo?: {
            bio: string;
        };
        lastOnline?: Date;
        serviceEmail?: any;
        userPresenceStatus?: any;
        userTransientStatus?: any;
    };
}