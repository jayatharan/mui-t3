import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export const ProjectCoworkerAccess = {
    ADMIN:"admin",
    EDITOR:"editor",
    VIEW_ONLY:"view_only"
} as const;

export type ProjectCoworkerAccess = typeof ProjectCoworkerAccess[keyof typeof ProjectCoworkerAccess];

export const ProjectCoworkerStatus = {
    INVITED:"invited",
    ACTIVE:"active",
    CANCELLED:"cancelled"
} as const;

export type ProjectCoworkerStatus = typeof ProjectCoworkerStatus[keyof typeof ProjectCoworkerStatus];

export default interface ProjectCoworker {
    email:string;
    access:ProjectCoworkerAccess;
    status:ProjectCoworkerStatus;
    emailStatus:string;
} 

export interface ProjectCoworkerDB extends ProjectCoworker {
    userId?:string;
    projectId:string;
}

export interface ProjectCoworkerDocument extends BaseDocument, ProjectCoworkerDB {
    user?:UserDocument;
    project?:ProjectDocument;
}