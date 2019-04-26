import { Card } from './card';
import { PaymentType } from './paymentType';
import { JsonObject } from 'json2typescript';

@JsonObject('CreditCard')
export class CreditCard extends Card {
  protected type: PaymentType = PaymentType.CreditCard;
}
