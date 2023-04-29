import BaseDocument from "./BaseDocument";
import { TeamDocument } from "./Team";
import { UserDocument } from "./User";

export default interface JobRequest {
    title:string;
    salary:number;
}

export interface JobRequestDB extends JobRequest {
    userId:string;
    teamId:string;
}

export interface JobRequestDocument extends BaseDocument, JobRequestDB{
    user?:UserDocument;
    team?:TeamDocument;
}