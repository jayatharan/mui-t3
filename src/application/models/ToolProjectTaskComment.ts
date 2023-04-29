import BaseDocument from "./BaseDocument";
import { ToolProjectTaskDocument } from "./ToolProjectTask";
import { UserDocument } from "./User";

export default interface ToolProjectTaskComment {
    comment:string;
}

export interface ToolProjectTaskCommentDB extends ToolProjectTaskComment{
    userId:string;
    toolProjectTaskId:string;
}

export interface ToolProjectTaskCommentDocument extends BaseDocument, ToolProjectTaskCommentDB {
    user?:UserDocument;
    toolProjectTask?:ToolProjectTaskDocument;
}