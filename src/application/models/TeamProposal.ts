import BaseDocument from "./BaseDocument";
import { TeamDocument } from "./Team";
import { UserDocument } from "./User";

export const TeamProposalStatus = {
    NEW:"new",
    ACCEPT:"accept",
    IGNORE:"ignore",
    CANCEL:"cancel"
} as const;

export type TeamProposalStatus = typeof TeamProposalStatus[keyof typeof TeamProposalStatus];

export default interface TeamProposal {
    status?:TeamProposalStatus;
}

export interface TeamProposalDB extends TeamProposal{
    userId:string;
    teamId:string;
}

export interface TeamProposalDocument extends BaseDocument, TeamProposalDB{
    user?:UserDocument;
    team?:TeamDocument;
}