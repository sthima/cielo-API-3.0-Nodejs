import { JsonProperty, JsonObject } from 'json2typescript';

import { CardBrands } from './cardBrands';
import { PaymentType } from './paymentType';

@JsonObject('Card')
export class Card {
  protected type: PaymentType;

  @JsonProperty('CardNumber', String, true)
  public cardNumber: string = undefined;

  @JsonProperty('Holder', String, true)
  public holder: string = undefined;

  @JsonProperty('ExpirationDate', String, true)
  public expirationDate: string = undefined;

  @JsonProperty('SecurityCode', String, true)
  public securityCode: string = undefined;

  @JsonProperty('Brand', String, true)
  public brand: CardBrands = undefined;

  constructor(securityCode: string, brand: CardBrands) {
    this.securityCode = securityCode;
    this.brand = brand;
  }

  public setExpirationDate(value: string) {
    this.expirationDate = value;
    return this;
  }

  public setCardNumber(value: string) {
    this.cardNumber = value;
    return this;
  }

  public setHolder(value: string) {
    this.holder = value;
    return this;
  }

  public getType(): PaymentType {
    return this.type;
  }
}
