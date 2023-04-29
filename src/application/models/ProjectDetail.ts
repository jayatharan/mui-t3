import BaseDocument from "./BaseDocument";
import { FileDocument } from "./File";
import { UserDocument } from "./User";

export default interface ProjectDetail {
    name?:string;
    category?:string;
    description?:string;
    startDate?:Date;
    endDate?:Date;
    technologies?:string[];
    images?:string[];
}

export interface ProjectDetailDB extends ProjectDetail{
    userId:string;
}

export interface ProjectDetailDocument extends BaseDocument, ProjectDetailDB{
    user?:UserDocument;
}