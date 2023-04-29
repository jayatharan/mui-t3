import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export default interface ToDo {
    task:string;
    completed:boolean;
}

export interface ToDoDB extends ToDo {
    userId:string;
    projectId?:string;
}

export interface ToDoDocument extends BaseDocument, ToDoDB {
    user?:UserDocument;
    project?:ProjectDocument;
}