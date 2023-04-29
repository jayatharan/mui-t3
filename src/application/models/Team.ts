import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { ProjectTeamMemberDocument } from "./ProjectTeamMember";
import { TeamProposalDocument } from "./TeamProposal";
import { UserDocument } from "./User";

export default interface Team {
    title:string;
    description?: string;
}

export interface TeamDB extends Team {
    userId:string;
    projectId:string;
    image:string;
}

export interface TeamDocument extends BaseDocument, TeamDB{
    user?:UserDocument;
    project?:ProjectDocument;
    teamProposals?:TeamProposalDocument[];
    projectTeamMembers?:ProjectTeamMemberDocument[];
}

export interface CreateTeam extends TeamDB{
    addTeamMembers?:CreateProjectTeamMember[];
}

export interface CreateProjectTeamMember {
    userId:string;
    designation:string;
    teamId:string;
}