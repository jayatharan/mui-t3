import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";

export interface UserConnection {
    status:string;
}

export interface UserConnectionDB extends UserConnection{
    fromUserId:string;
    toUserId:string;
}

export interface UserConnectionDocument extends BaseDocument, UserConnectionDB{
    fromUser?:UserDocument;
    toUser?:UserDocument;
}