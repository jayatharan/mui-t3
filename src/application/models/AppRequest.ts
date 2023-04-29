import { Request } from "express";
import { UserDocument } from "./User";

export default interface AppRequest extends Request {
    user?:UserDocument;
}