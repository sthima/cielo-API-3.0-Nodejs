import { Card } from './card';
import { PaymentType } from './paymentType';
export declare class CreditCard extends Card {
    protected type: PaymentType;
    cardToken: string;
    setCardToken(cardToken: string): this;
}
