import { AbstractSaleRequest } from './abstractSaleRequest';
import { CardToken } from '../cardToken';
import { Merchant } from '../../merchant';
import { Environment } from '../environment';
export declare class CreateCardTokenRequest extends AbstractSaleRequest<CardToken, CardToken> {
    constructor(merchant: Merchant, environment: Environment);
    execute(param: CardToken): Promise<CardToken>;
}
