import { CardBrands } from './cardBrands';
import { PaymentType } from './paymentType';
export declare class Card {
    protected type: PaymentType;
    cardNumber: string;
    holder: string;
    expirationDate: string;
    securityCode: string;
    brand: CardBrands;
    constructor(securityCode: string, brand: CardBrands);
    setExpirationDate(value: string): this;
    setCardNumber(value: string): this;
    setHolder(value: string): this;
    getType(): PaymentType;
}
