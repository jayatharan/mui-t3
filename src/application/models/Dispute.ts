import BaseDocument from "./BaseDocument";
import { DisputeUserDocument } from "./DisputeUser";
import { UserDocument } from "./User";

export const DisputeStatus = {
    NEW: "new",
    IN_PROGRESS: "in_progress",
    RESOLVED: "resolved"
} as const;

export type DisputeStatus = typeof DisputeStatus[keyof typeof DisputeStatus]

export default interface Dispute {
    description?:string;
    status:string;
    dispute:string;
}

export interface DisputeDB extends Dispute{
    userId:string;
}

export interface DisputeDocument extends BaseDocument, DisputeDB{
    user?:UserDocument;
    disputeUsers?:DisputeUserDocument[];
}