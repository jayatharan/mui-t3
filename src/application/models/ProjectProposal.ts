import BaseDocument from "./BaseDocument";
import { FileDocument } from "./File";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export const ProjectProposalStatus = {
    NEW:"new",
    READ:"read",
    CANCELLED:"cancelled",
    INTERVIEWING:"interviewing",
    ACCEPTED:"accepted"
} as const;

export type ProjectProposalStatus = typeof ProjectProposalStatus[keyof typeof ProjectProposalStatus];

export const ProjectProposalChoice = {
    HOURLY: "hourly",
    FIXED: "fixed"
} as const;

export type ProjectProposalChoice = typeof ProjectProposalChoice[keyof typeof ProjectProposalChoice];

export default interface ProjectProposal {
    description?: string;
    amount?:number;
    choice:ProjectProposalChoice;
    startDate?:Date;
    endDate?:Date;
    status?:ProjectProposalStatus;
    filesId?:string[];
    hourlyMin?:number;
    hourlyMax?:number;
    shortListed:boolean;
}

export interface ProjectProposalDB extends ProjectProposal{
    userId:string;
    projectId:string;
}

export interface ProjectProposalDocument extends BaseDocument, ProjectProposalDB{
    user?:UserDocument;
    project?:ProjectDocument;
    files?:FileDocument[];
}