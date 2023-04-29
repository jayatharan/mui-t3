import BaseDocument from "./BaseDocument";
import { MeetingDocument } from "./Meeting";
import { UserDocument } from "./User";

export const MeetingUserStatus = {
    NEW:"new",
    ACTIVE:"active",
    ACCEPTED:"accepted",
    DECLINED:"declined",
    CANCELLED:"cancelled",
    IN_A_MEETING:"in_a_meeting"
} as const;

export type MeetingUserStatus = typeof MeetingUserStatus[keyof typeof MeetingUserStatus];

export const MeetingUserAccess = {
    ADMIN:"admin",
    MEMBER:"member"
} as const;

export type MeetingUserAccess = typeof MeetingUserAccess[keyof typeof MeetingUserAccess];

export interface MeetingUser {
    email:string;
    access:MeetingUserAccess;
    status:MeetingUserStatus;
}

export interface MeetingUserDB extends MeetingUser{
    meetingId:string;
    userId?:string;
}

export interface MeetingUserDocument extends BaseDocument, MeetingUserDB{
    user?:UserDocument;
    meeting?:MeetingDocument;
}