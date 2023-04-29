import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";

export default interface Address {
    address?:string;
    city?:string;
    country?:string;
    postCode?:string;
}

export interface AddressDB extends Address{
    userId?:string;
}

export interface AddressDocument extends BaseDocument, AddressDB {
    user?:UserDocument;
}