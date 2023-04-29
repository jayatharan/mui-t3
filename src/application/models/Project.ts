import BaseDocument from "./BaseDocument";
import GetListQueryParams from "./GetListQueryParams";
import { ProjectCoworkerDocument } from "./ProjectCoworker";
import { ProjectProposalDocument } from "./ProjectProposal";
import { ProjectSkillDocument } from "./ProjectSkill";
import { UserDocument } from "./User";

export const ProjectStatus = {
    OPEN:"open",
    IN_PROGRESS:"in_progress",
    ON_HOLD:"on_hold",
    COMPLETED:"completed"
} as const;

export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus];

export const ProjectTimeline = {
    LESS_THAN_ONE_MONTH: "less_than_one_month",
    ONE_TO_THREE_MONTHS: "one_to_three_months",
    THREE_TO_SIX_MONTHS: "three_to_six_months",
    MORE_THAN_SIX_MONTHS: "more_than_six_months"
} as const;

export type ProjectTimeline = typeof ProjectTimeline[keyof typeof ProjectTimeline];

export const ProjectSkillLevel = {
    BASIC : "basic",
    INTERMEDIATE: "intermediate",
    EXPERT: "expert"
} as const;

export type ProjectSkillLevel = typeof ProjectSkillLevel[keyof typeof ProjectSkillLevel];

export const ProjectChoice = {
    HOURLY: "hourly",
    FIXED: "fixed"
} as const;

export type ProjectChoice = typeof ProjectChoice[keyof typeof ProjectChoice];

export const HoursPerWeek = {
    LESS_THAN_30:"less_than_30",
    MORE_THAN_30:"more_than_30"
} as const;

export type HoursPerWeek = typeof HoursPerWeek[keyof typeof HoursPerWeek];

export default interface Project {
    title: string;
    description?: string;
    status:ProjectStatus;
    category: string;
    budget?: number;
    hourlyMin?:number;
    hourlyMax?:number;
    choice:ProjectChoice;
    timeline: ProjectTimeline;
    skillLevel: ProjectSkillLevel;
    startDate?: Date;
    endDate?: Date;
    amount?: number;
    rate?: number; 
    remainingAmount?: number;
    hoursPerWeek?:HoursPerWeek;
}

export interface ProjectDB extends Project {
    userId:string;
}

export interface ProjectDocument extends BaseDocument, ProjectDB{
    user?:UserDocument;
    projectProposals?:ProjectProposalDocument[];
    projectSkills?:ProjectSkillDocument[];
    projectCoworkers?:ProjectCoworkerDocument[];
}

export interface GetProjectsQueryParams extends GetListQueryParams{
    skillLevels?:string;
    projectDurations?:string;
    skillIds?:string;
    status?:string;
    expandUser?:string; //If you want to expand user pass 'true' here
    expandProjectSkills?:string;
    expandProjectCoworkers?:string;
}

export interface GetProjectQueryParams {
    expandUser?:string;
    expandProjectSkills?:string;
    expandProjectCoworkers?:string;
}

export interface GetProjectProposalQueryParams extends GetListQueryParams{
    shortListed?:string;
    skillIds?:string;
    expandUser?:string;
}

export interface GetProjectInviteQueryParams extends GetListQueryParams {
    status?:string;
}

export interface GetProjectToDosQueryParams extends GetListQueryParams{
    onlyMy?:string;
}

export interface GetMyProjectsQueryParams extends GetListQueryParams {
    expandUser?:string;
    expandProjectSkills?:string;
    expandProjectCoworkers?:string;
}