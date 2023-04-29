import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { SkillDocument } from "./Skill";

export default interface ProjectSkill {
    level:number;
    points:number;
}

export interface ProjectSkillDB extends ProjectSkill{
    projectId:string;
    skillId:string;
}

export interface ProjectSkillDocument extends BaseDocument, ProjectSkillDB {
    project?:ProjectDocument;
    skill?:SkillDocument; 
}
