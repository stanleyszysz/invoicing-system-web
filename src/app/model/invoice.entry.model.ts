import { CarModel } from "./car.model";

export interface InvoiceEntryModel {
    description: string;
    price: number;
    vatValue: number;
    vatRate: string;
    carRelatedExpense: CarModel;
}