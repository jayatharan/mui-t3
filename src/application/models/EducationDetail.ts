import Address, { AddressDocument } from "./Address";
import BaseDocument from "./BaseDocument";
import { FileDocument } from "./File";
import { UserDocument } from "./User";

export const EducationType = {
    BACHELOR:"bachelor",
    MASTER:"master",
    DOCTORATE:"doctorate",
    DIPLOMA:"diploma",
    CERTIFICATE:"certificate",
    FOUNDATION:"foundation",
    PROFESSIONAL:"professional",
    HIGH_SCHOOL:"high_school",
    ONLINE:"online"
} as const;

export type EducationType = typeof EducationType[keyof typeof EducationType];

export default interface EducationalDetail {
    courseName:string;
    type:EducationType;
    organizationName:string;
    description?:string;
    startDate?: Date;
    endDate?: Date;
    imageId?: string;
    addressId?:string;
}

export interface UserCreateEducationalDetail extends BaseDocument, EducationalDetail {
    address?:Address;
}

export interface EducationalDetailDB extends EducationalDetail {
    userId:string;
}

export interface EducationalDetailDocument extends BaseDocument,EducationalDetailDB {
    user?:UserDocument;
    image?:FileDocument;
    address?:AddressDocument;
}