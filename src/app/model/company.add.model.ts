import { AddressModel } from "./address.model";

export interface CompanyAddModel {
    taxIdentifier: string;
    name: string;
    address: AddressModel;
    pensionInsurance: number;
    healthInsurance: number;
}