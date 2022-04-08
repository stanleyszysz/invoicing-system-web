import { CompanyAddModel } from "./company.add.model";
import { InvoiceEntryModel } from "./invoice.entry.model";

export interface InvoiceAddModel {
    invoiceId: string;
    dateAt: string;
    number: string;
    seller: CompanyAddModel;
    buyer: CompanyAddModel;
    entries: Array<InvoiceEntryModel>;
}