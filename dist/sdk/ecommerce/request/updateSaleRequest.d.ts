import { AbstractSaleRequest } from './abstractSaleRequest';
import { SaleResponse } from '../saleResponse';
import { Merchant } from '../../merchant';
import { Environment } from '../environment';
export declare class UpdateSaleRequest extends AbstractSaleRequest<string, SaleResponse> {
    readonly type: string;
    amount: number;
    serviceTaxAmount: number;
    constructor(type: string, merchant: Merchant, environment: Environment);
    execute(paymentId: string): Promise<SaleResponse>;
}
