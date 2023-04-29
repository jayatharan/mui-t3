import BaseDocument from "./BaseDocument";
import { TeamDocument } from "./Team";
import { UserDocument } from "./User";

export default interface ProjectTeamMember {
    designation:string;
}

export interface ProjectTeamMemberDB extends ProjectTeamMember {
    userId:string;
    teamId:string;
}

export interface ProjectTeamMemberDocument extends BaseDocument, ProjectTeamMemberDB {
    user?:UserDocument;
    team?:TeamDocument;
}
