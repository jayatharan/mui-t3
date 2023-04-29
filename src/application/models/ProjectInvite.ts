import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export const ProjectInviteStatus = {
    INVITED: "invited",
    ACTIVE: "active",
    CANCELLED: "cancelled"
} as const

export type ProjectInviteStatus = typeof ProjectInviteStatus[keyof typeof ProjectInviteStatus];

export const ProjectInviteChoice = {
    HOURLY: "hourly",
    FIXED: "fixed"
} as const;

export type ProjectInviteChoice = typeof ProjectInviteChoice[keyof typeof ProjectInviteChoice];

export default interface ProjectInvite {
    designation?:string;
    description?:string;
    budget?: number;
    hourlyMin?:number;
    hourlyMax?:number;
    choice:ProjectInviteChoice;
    timeline: string;
    hourPerWeek?:string;
    status:ProjectInviteStatus;
}

export interface ProjectInviteDB extends ProjectInvite{
    userId:string;
    projectId:string;
}

export interface ProjectInviteDocument extends BaseDocument, ProjectInviteDB{
    user?:UserDocument;
    project?:ProjectDocument;
}