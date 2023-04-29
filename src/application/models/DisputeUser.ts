import BaseDocument from "./BaseDocument";
import { DisputeDocument } from "./Dispute";
import { UserDocument } from "./User";

export default interface DisputeUser {
    complain:string;
    description?:string;   
}

export interface DisputeUserDB extends DisputeUser{
    disputeUser:string;
    userId:string;
    disputeId:string;
    status:string;
}

export interface DisputeUserDocument extends BaseDocument, DisputeUserDB{
    user?:UserDocument;
    dispute?:DisputeDocument;
}