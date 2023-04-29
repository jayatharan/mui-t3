import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";
import { FileDocument } from "./File";
import { JobDocument } from "./Job";

export const JobProposalStatus = {
    NEW: "new",
    READ: "read",
    CANCEL: "cancel",
    INTERVIEWING: "interviewing",
    COMPLETED: "completed"
} as const;

export type JobProposalStatus = typeof JobProposalStatus[keyof typeof JobProposalStatus];

export default interface JobProposal {
    status?:JobProposalStatus; 
    coverLetter?:string;
    skillIds:string[];
    fileId:string;
}

export interface JobProposalDB extends JobProposal{
    userId:string;
    jobId:string;
    shortListed:boolean;
}

export interface JobProposalDocument extends BaseDocument, JobProposalDB{
    user?:UserDocument;
    job?:JobDocument;
    file?:FileDocument;
}