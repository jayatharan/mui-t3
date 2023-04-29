import GetListQueryParams from "./GetListQueryParams";

export interface GetProjectsBasedOnSubscriptionQueryParams extends GetListQueryParams{
    status?:string;
}

export interface GetAdminTasksQueryParams extends GetListQueryParams {
    status?:string;
    adminId?:string;
}