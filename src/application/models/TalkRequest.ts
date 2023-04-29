import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export default interface TalkRequest {
    time?:Date;
}

export interface TalkRequestDB extends TalkRequest{
    userId:string;
    projectId:string;
}

export interface TalkRequestDocument extends BaseDocument, TalkRequestDB {
    user?:UserDocument;
    project?:ProjectDocument;
}