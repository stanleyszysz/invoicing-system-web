import { AddressModel } from "./address.model";

export interface CompanyAddModel {
    companyId: string;
    taxIdentifier: string;
    name: string;
    address: AddressModel;
    pensionInsurance: number;
    healthInsurance: number;
}