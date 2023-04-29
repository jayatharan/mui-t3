import BaseDocument from "./BaseDocument";
import { MeetingUserDocument } from "./MeetingUser";

export const MeetingStatus = {
    NEW:"new",
    ACTIVE:"active",
    ENDED:"ended",
    CANCELLED:"cancelled",
    RESCHEDULED:"rescheduled"
} as const;

export type MeetingStatus = typeof MeetingStatus[keyof typeof MeetingStatus];

export default interface Meeting {
    type:string;
    status:MeetingStatus;
    startTime:Date;
    endTime?:Date;
    link?:string;
    metaData?:string;
    description?:string;
    notes?:string;
}

export interface MeetingDB extends Meeting{

}

export interface MeetingDocument extends BaseDocument, MeetingDB{
    meetingUsers?:MeetingUserDocument[];
}