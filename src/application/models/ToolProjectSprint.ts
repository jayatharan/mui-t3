import BaseDocument from "./BaseDocument";
import { ToolProjectDocument } from "./ToolProject";

export const ToolProjectSprintStatus = {
    NEW:"new",
    ACTIVE:"active",
    COMPLETED:"completed",
    QA_TESTING:"qa_testing",
    DONE:"done"
} as const;

export type ToolProjectSprintStatus = typeof ToolProjectSprintStatus[keyof typeof ToolProjectSprintStatus];

export default interface ToolProjectSprint {
    title:string;
    status:ToolProjectSprintStatus;
    backlog:string[];
}

export interface ToolProjectSprintDB extends ToolProjectSprint {
    toolProjectId?:string;
}

export interface ToolProjectSprintDocument extends BaseDocument, ToolProjectSprintDB {
    toolProject?:ToolProjectDocument;
}