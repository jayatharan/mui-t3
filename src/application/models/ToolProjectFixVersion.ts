import BaseDocument from "./BaseDocument";
import { ToolProjectDocument } from "./ToolProject";

export const ToolProjectFixVersionStatus = {
    NEW:"new",
    IN_REVIEW:"in_review",
    DECLINED:"declined",
    RELEASED:"released"
} as const;

export type ToolProjectFixVersionStatus = typeof ToolProjectFixVersionStatus[keyof typeof ToolProjectFixVersionStatus];

export default interface ToolProjectFixVersion {
    title:string;
    status?:ToolProjectFixVersionStatus;
}

export interface ToolProjectFixVersionDB extends ToolProjectFixVersion {
    toolProjectId?:string;
}

export interface ToolProjectFixVersionDocument extends BaseDocument, ToolProjectFixVersionDB {
    toolProject?:ToolProjectDocument;
}