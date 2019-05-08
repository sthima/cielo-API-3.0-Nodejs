import { Card } from './card';
import { PaymentType } from './paymentType';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('CreditCard')
export class CreditCard extends Card {
  protected type: PaymentType = PaymentType.CreditCard;

  @JsonProperty('ardToken', String, true)
  public cardToken: string = undefined;;

  public setCardToken(cardToken: string) {
		this.cardToken = cardToken;
		return this;
	}
}
