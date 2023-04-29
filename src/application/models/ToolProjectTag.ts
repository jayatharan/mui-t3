import BaseDocument from "./BaseDocument";
import { ToolProjectDocument } from "./ToolProject";

export default interface ToolProjectTag {
    tag:string;
}

export interface ToolProjectTagDB extends ToolProjectTag {
    toolProjectId?:string;
}

export interface ToolProjectTagDocument extends BaseDocument, ToolProjectTagDB {
    toolProject?:ToolProjectDocument;
}