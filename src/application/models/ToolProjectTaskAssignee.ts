import BaseDocument from "./BaseDocument";
import { ToolProjectTaskDocument } from "./ToolProjectTask";
import { UserDocument } from "./User";


export interface ToolProjectTaskAssigneeDB {
    userId:string;
    toolProjectTaskId:string;
    current:boolean;
}

export interface ToolProjectTaskAssigneeDocument extends BaseDocument, ToolProjectTaskAssigneeDB {
    toolProjectTask?:ToolProjectTaskDocument;
    user?:UserDocument;
}