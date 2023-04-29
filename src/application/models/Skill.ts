import BaseDocument from "./BaseDocument";

export default interface Skill {
    title:string;
}

export interface SkillDB extends Skill{
    
}

export interface SkillDocument extends BaseDocument, SkillDB{
    
}