import { Card } from './card';
import { PaymentType } from './paymentType';
import { JsonObject } from 'json2typescript';

@JsonObject('DebitCard')
export class DebitCard extends Card {
  protected type: PaymentType = PaymentType.DebitCard;
}
