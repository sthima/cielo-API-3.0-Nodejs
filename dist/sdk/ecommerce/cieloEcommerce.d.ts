import { Merchant } from '../merchant';
import { Environment } from './environment';
import { Sale } from './sale';
import { SaleResponse } from './saleResponse';
import { CardToken } from './cardToken';
export declare class CieloEcommerce {
    private merchant;
    private environment;
    constructor(merchant: Merchant, environment?: Environment);
    createSale(sale: Sale): Promise<Sale>;
    captureSale(paymentId: string, amount: number, serviceTaxAmount: number): Promise<SaleResponse>;
    cancelSale(paymentId: string, amount?: number): Promise<SaleResponse>;
    createCardToken(cardToken: CardToken): Promise<CardToken>;
}
