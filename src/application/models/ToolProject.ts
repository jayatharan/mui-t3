import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { ToolProjectUserDocument } from "./ToolProjectUser";
import { UserDocument } from "./User";

export const ToolProjectStatus = {
    ACTIVE: "active",
    IN_ACTIVE: "in_active",
    CLOSED: "closed"
} as const;

export type ToolProjectStatus = typeof ToolProjectStatus[keyof typeof ToolProjectStatus];

export default interface ToolProject {
    title: string;
    description?: string;
    status?:ToolProjectStatus;
    backlog:string[];
    statuses:string[];
} 

export interface ToolProjectDB extends ToolProject{
    userId:string;
    projectId?:string;
}

export interface ToolProjectDocument extends BaseDocument, ToolProjectDB {
    project?:ProjectDocument;
    user?:UserDocument;
    toolUsers?:ToolProjectUserDocument[];
}