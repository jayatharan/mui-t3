import BaseDocument from "./BaseDocument";
import GetListQueryParams from "./GetListQueryParams";
import { JobDocument } from "./Job";
import { ProjectDocument } from "./Project";
import { SkillDocument } from "./Skill";
import { UserDocument } from "./User";

export interface SkillRequest {
    title?:string;
    level:number;
    points:number;
}

export interface SkillRequestDB extends SkillRequest{
    skillId?:string;
    projectId?:string;
    userId?:string;
    jobId?:string;
    resolved:boolean;
}

export interface SkillRequestDocument extends BaseDocument, SkillRequestDB{
    skill?:SkillDocument;
    project?:ProjectDocument;
    user?:UserDocument;
    job?:JobDocument;
}

export interface GetRequestSkillQueryParams extends GetListQueryParams{
    resolved?:boolean;
}

export interface RequestSkillResolveBody{
    action:string;
}