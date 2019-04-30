import { AbstractSaleRequest } from './abstractSaleRequest';
import { Sale } from '../sale';
import { Merchant } from '../../merchant';
import { Environment } from '../environment';
export declare class CreateSaleRequest extends AbstractSaleRequest<Sale, Sale> {
    constructor(merchant: Merchant, environment: Environment);
    execute(param: Sale): Promise<Sale>;
}
