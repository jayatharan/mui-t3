import Address from "./Address";
import BaseDocument from "./BaseDocument";
import Company from "./Company";
import { UserDocument } from "./User";

export default interface Biography {
    firstName?: string;
    lastName?: string;
    companyId?: string;
    jobRole?:string;
    addressId?:string;
    imageId?:string;
}

export interface BiographyDB extends Biography {
    userId: string;   
}

export interface BiographyDocument extends BaseDocument, BiographyDB{
    user?:UserDocument;
    address?:Address;
    company?:Company;
}

export interface UpdateUserBiographyBody extends Biography {
    company?:Company;
    address?:Address;
}