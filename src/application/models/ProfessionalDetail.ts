import BaseDocument from "./BaseDocument";
import Company, { CompanyDocument, UserCreateCompany } from "./Company";
import { FileDocument } from "./File";
import { UserDocument } from "./User";

export default interface ProfessionalDetail {
    companyId:string;
    jobRole:string;
    description?:string;
    startDate?: Date;
    endDate?: Date;
    imageId?: string;
}

export interface UserCreateProfessionalDetail extends ProfessionalDetail{
    company?:UserCreateCompany;
}

export interface ProfessionalDetailDB extends ProfessionalDetail {
    userId:string;
}

export interface ProfessionalDetailDocument extends BaseDocument, ProfessionalDetailDB{
    user?:UserDocument;
    company?:CompanyDocument;
    image?:FileDocument;
}
