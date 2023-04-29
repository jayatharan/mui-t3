import GetListQueryParams from "./GetListQueryParams";

export interface GetToolProjectQueryParams extends GetListQueryParams{
    userId?:string;
    status?:string;
    type?:string;
    severity?:string;
    priority?:string;
    fixedVersionId?:string;
}