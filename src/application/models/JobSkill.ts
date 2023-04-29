import BaseDocument from "./BaseDocument";
import { JobDocument } from "./Job";
import { SkillDocument } from "./Skill";

export default interface JobSkill {
    level: number;
    points: number;
}

export interface JobSkillDB extends JobSkill{
    jobId:string;
    skillId:string;
}

export interface JobSkillDocument extends BaseDocument, JobSkillDB {
    job?:JobDocument;
    skill?:SkillDocument;
}