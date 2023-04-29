import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";

export default interface Session {
    userAgent: string;
}

export interface SessionDB extends Session{
    userId:string;
    valid: boolean;
}

export interface SessionDocument extends BaseDocument, SessionDB{
    user?:UserDocument;
}