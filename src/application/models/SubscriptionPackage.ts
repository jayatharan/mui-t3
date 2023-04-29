import BaseDocument from "./BaseDocument";

export interface SubscriptionPackageDocument extends BaseDocument{
    title:string;
    description:string;
    amount:number;
}