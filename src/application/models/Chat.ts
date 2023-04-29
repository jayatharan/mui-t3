import BaseDocument from "./BaseDocument";
import { ChatUserDocument } from "./ChatUser";
import { FileDocument } from "./File";
import { UserDocument } from "./User";

export default interface Chat {
    chat:string;
}

export interface ChatDB extends Chat{
    avatarId?:string;
    userId:string;
}

export interface ChatDocument extends BaseDocument, ChatDB {
    user?:UserDocument;
    avatar?:FileDocument;
    chatUsers?:ChatUserDocument[];
}