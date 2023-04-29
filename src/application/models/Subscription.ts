import BaseDocument from "./BaseDocument";
import { SubscriptionPackageDocument } from "./SubscriptionPackage";
import { UserDocument } from "./User";

export interface Subscription {

}

export interface SubscriptionDB extends Subscription{
    userId: string;
    packageId:string;
    startDate?:Date;
    endDate?:Date;
    amount:number;
    needToPay?:number;
    active?:boolean;
}

export interface SubscriptionDocument extends BaseDocument, SubscriptionDB{
    user?:UserDocument;
    package?:SubscriptionPackageDocument;
}