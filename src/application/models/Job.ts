import BaseDocument from "./BaseDocument";
import { CompanyDocument } from "./Company";
import GetListQueryParams from "./GetListQueryParams";
import { JobSkillDocument } from "./JobSkill";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export const JobStatus = {
    OPEN:"open",
    INTERVIEWING:"interviewing",
    SHORTLISTING: "shortlisting",
    IN_PROGRESS: "in_progress",
    COMPLETED: "completed",
    CLOSED: "closed"
}

export type JobStatus = typeof JobStatus[keyof typeof JobStatus];

export default interface Job {
    title: string;
    description?: string;
    salary?: string;
    startDate?: Date;
    endDate?: Date;
    status:JobStatus;
    jobType:string;
    employeeType:string;
    modality:string;
    skillIds?:string[];
}

export interface JobDB extends Job{
    companyId?:string;     
    userId:string;
    projectId:string;
    type?:string;
}

export interface JobDocument extends BaseDocument, JobDB{
    user?:UserDocument;
    company?:CompanyDocument;
    project?:ProjectDocument;
    jobSkills?:JobSkillDocument[];
}

export interface GetJobsQueryParams extends GetListQueryParams {
    expandUser?:string;
    expandCompany?:string;
    expandProject?:string;
    expandJobSkills?:string;
    skillLevels?:string;
    projectDurations?:string;
    skillIds?:string;
}

export interface GetJobQueryParams{
    expandUser?:string;
    expandCompany?:string;
    expandProject?:string;
    expandJobSkills?:string;
}