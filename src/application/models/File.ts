import GetListQueryParams from './GetListQueryParams';

export interface GetFilesQueryParams extends GetListQueryParams{
    fileIds?:string;
}

export interface FileDocument {
    id:string;
    acl?:string;
    bucket?:string;
    contentDisposition?:string;
    contentEncoding?:string;
    contentType?:string;
    encoding?:string;
    etag?:string;
    fieldname?:string;
    key?:string;
    location?:string;
    mimetype?:string;
    orignalname?:string;
    serverSideEncryption?:string;
    size?:number;
    storageClass?:string;
}