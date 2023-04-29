import BaseDocument from "./BaseDocument";
import { BiographyDocument } from "./Biography";
import EducationalDetail from "./EducationDetail";
import GetListQueryParams from "./GetListQueryParams";
import ProfessionalDetail from "./ProfessionalDetail";
import { ProjectDetailDocument } from "./ProjectDetail";
import { UserSkillDocument } from "./UserSkill";

export enum UserRole {
    CLIENT="client", 
    STUDENT="student", 
    FREE_LANCER="freelancer",
    ADMIN="admin"
}

export default interface User {
    email:string;
    name:string;
    role:UserRole,
    password:string;
    alternativeEmail?:string;
    mobile?:string;
    imageId?:string;
    open:boolean;
}

export interface UserDB extends User {
    emailVerified?:boolean;
    emailVerificationGuid?:string;
}

export interface UserDocument extends BaseDocument, UserDB {
    biography?:BiographyDocument;
    projectDetails?:ProjectDetailDocument[];
    professionalDetails?:ProfessionalDetail[];
    educationDetails?:EducationalDetail[];
    userSkills?:UserSkillDocument[];
}

export interface GetOpenUsersQueryParams extends GetListQueryParams{
    role?:string;
}

export interface GetWaitingUserConnectionRequestsQueryParams extends GetListQueryParams{
    type?:string;
}

export interface GetStudentsQueryParams extends GetListQueryParams{
    skillIds?:string,
    organizationName?:string;
    courseName?:string;
    educationType?:string;
    address?:string;
}