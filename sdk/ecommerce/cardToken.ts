import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('CardToken')
export class CardToken {

  @JsonProperty('Brand', String, true)
  public brand: string = undefined;

  @JsonProperty('CardNumber', String, true)
  public cardNumber: string = undefined;

  @JsonProperty('CardToken', String, true)
  public cardToken: string = undefined;

  @JsonProperty('CustomerName', String, true)
  public customerName: string = undefined;

  @JsonProperty('ExpirationDate', String, true)
  public expirationDate: string = undefined;

  @JsonProperty('Links', [Object], true)
  public links: Object[] = undefined;

  @JsonProperty('Holder', String, true)
  public holder: string = undefined;

  public setBrand(value: string) {
    this.brand = value;
    return this;
  }

  public setCardNumber(value: string) {
    this.cardNumber = value;
    return this;
  }

  public setHolder(holder: string) {
    this.holder = holder;

    if (!this.customerName) {
      this.customerName = holder;
    }

    return this;
  }

  public setExpirationDate(value: string) {
    this.expirationDate = value;
    return this;
  }
}
