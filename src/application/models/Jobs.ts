import GetListQueryParams from "./GetListQueryParams";

export interface GetJobsQueryParams extends GetListQueryParams{
    skillLevels?:string;
    projectDurations?:string;
    skillIds?:string;
}

export interface GetJobProposalQueryParams extends GetListQueryParams{
    shortListed?:string;
    skillIds?:string;
}