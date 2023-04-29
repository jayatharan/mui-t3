import BaseDocument from "./BaseDocument";
import { ToolProjectDocument } from "./ToolProject";
import { UserDocument } from "./User";

export const ToolProjectUserStatus = {
    PENDING:"pending",
    ACCEPTED:"accepted",
    REJECTED:"rejected",
    CANCELLED:"cancelled"
} as const;

export type ToolProjectUserStatus = typeof ToolProjectUserStatus[keyof typeof ToolProjectUserStatus];

export const ToolProjectUserAccess = {
    ADMIN:"admin",
    MEMBER:"member"
} as const;

export type ToolProjectUserAccess = typeof ToolProjectUserAccess[keyof typeof ToolProjectUserAccess];

export interface ToolProjectUser {
    status:ToolProjectUserStatus;
    access:ToolProjectUserAccess;
}

export interface ToolProjectUserDB extends ToolProjectUser {
    userId:string;
    toolProjectId?:string; 
}

export interface ToolProjectUserDocument extends BaseDocument, ToolProjectUserDB {
    user?:UserDocument;
    toolProject?:ToolProjectDocument;
}