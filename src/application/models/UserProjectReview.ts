import BaseDocument from "./BaseDocument";
import { ProjectDocument } from "./Project";
import { UserDocument } from "./User";

export default interface UserProjectReview {
    comment:string;
    rating:number;
}

export interface UserProjectReviewDB extends UserProjectReview{
    userId:string;
    createByUserId:string;
    projectId:string;
}

export interface UserProjectReviewDocument extends BaseDocument, UserProjectReviewDB {
    user?:UserDocument;
    createByUser?:UserDocument;
    project?:ProjectDocument;
}