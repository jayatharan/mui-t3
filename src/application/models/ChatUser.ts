import BaseDocument from "./BaseDocument";
import { ChatDocument } from "./Chat";
import { UserDocument } from "./User";

export const ChatUserAccess = {
    MEMBER: "member",
    ADMIN: "admin"
} as const;

export type ChatUserAccess = typeof ChatUserAccess[keyof typeof ChatUserAccess];

export default interface ChatUser {
    access:ChatUserAccess;
}

export interface ChatUserDB extends ChatUser{
    chatId:string;
    userId:string;
}

export interface ChatUserDocument extends BaseDocument, ChatUserDB {
    chat?:ChatDocument;
    user?:UserDocument;
}