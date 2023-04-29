import BaseDocument from "./BaseDocument";
import { UserDocument } from "./User";

export interface UserCalender{
    startTime:Date;
    endTime:Date;
}

export interface UserCalenderDB extends UserCalender{
    userId:string;
}

export interface UserCalenderDocument extends BaseDocument, UserCalenderDB{
    user?:UserDocument;
}