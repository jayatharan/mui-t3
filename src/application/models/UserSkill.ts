import BaseDocument from "./BaseDocument";
import { SkillDocument } from "./Skill";
import { UserDocument } from "./User";

export default interface UserSkill {
    level:number;
    points:number;
}

export interface UserSkillDB extends UserSkill {
    userId:string;
    skillId:string;
}

export interface UserSkillDocument extends BaseDocument, UserSkillDB {
    user?:UserDocument;
    skill?:SkillDocument;
}

export interface CreateUserSkill {
    userId:string;
    skillId:string;
    skill?:SkillDocument;
    level:number;
    points:number;
}