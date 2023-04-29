import BaseDocument from "./BaseDocument";
import { ChatDocument } from "./Chat";
import { FileDocument } from "./File";
import { UserDocument } from "./User";

export default interface ChatMessage{
    message:string;
    fileId?:string;
}

export interface ChatMessageDB extends ChatMessage{
    chatId:string;
    userId:string;
}

export interface ChatMessageDocument extends BaseDocument, ChatMessageDB {
    chat?:ChatDocument;
    user?:UserDocument;
    file?:FileDocument;
}