import BaseDocument from "./BaseDocument";
import { ToolProjectDocument } from "./ToolProject";
import { ToolProjectFixVersionDocument } from "./ToolProjectFixVersion";
import { UserDocument } from "./User";

export const ToolProjectTaskSeverity = {
    LOW:"low",
    MEDIUM:"medium",
    HIGH:"high",
    CRITICAL:"critical"
} as const;

export type ToolProjectTaskSeverity = typeof ToolProjectTaskSeverity[keyof typeof ToolProjectTaskSeverity];

export const ToolProjectTaskPriority = {
    LOWEST:"lowest",
    LOW:"low",
    MEDIUM:"medium",
    HIGH:"high",
    HIGHEST:"highest"
} as const;

export type ToolProjectTaskPriority = typeof ToolProjectTaskPriority[keyof typeof ToolProjectTaskPriority];

export const ToolProjectTaskType = {
    TASK:"task",
    BUG:"bug",
    ENHANCEMENT:"enhancement"
} as const;

export type ToolProjectTaskType = typeof ToolProjectTaskType[keyof typeof ToolProjectTaskType]

export default interface ToolProjectTask{
    title:string;
    description?: string;
    toolProjectId:string;
    status?:string;
    type:string;
    severity?:ToolProjectTaskSeverity;
    priority?:ToolProjectTaskPriority;
    storyPoints?:number;
    tags?:string[];
}

export interface ToolProjectTaskDB extends ToolProjectTask{
    userId:string;
    fixVersionId?:string;
}

export interface ToolProjectTaskDocument extends BaseDocument, ToolProjectTaskDB {
    user?:UserDocument;
    toolProject?:ToolProjectDocument;
    fixVersion?:ToolProjectFixVersionDocument;
}