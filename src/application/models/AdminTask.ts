import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";

export const AdminTaskStatus = {
    NEW: "new",
    IN_PROGRESS: "in_progress",
    RESOLVED: "resolved",
    CLOSED: "closed",
    DEFERRED: "deferred"
} as const;

export type AdminTaskStatus = typeof AdminTaskStatus[keyof typeof AdminTaskStatus];

export default interface AdminTask {
    task:string;
    description?:string;
    status:AdminTaskStatus;
}

export interface AdminTaskDB extends AdminTask{
    userId:string;
    adminId:string;
}

export interface AdminTaskDocument extends AdminTaskDB, BaseDocument{
    user?:UserDocument;
    admin?:UserDocument;
}
