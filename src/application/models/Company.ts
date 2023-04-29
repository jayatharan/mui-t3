import Address, { AddressDocument } from "./Address";
import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";

export default interface Company {
    name:string;
    description?:string;
    addressId?:string;
}

export interface UserCreateCompany extends Company {
    address?:Address;
}

export interface CompanyDB extends Company {
    userId:string;
}

export interface CompanyDocument extends BaseDocument,CompanyDB {
    user?:UserDocument;
    address?:AddressDocument;
}