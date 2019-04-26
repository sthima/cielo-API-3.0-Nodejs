import { JsonProperty, JsonObject, Any } from 'json2typescript';
import { CreditCard } from './creditCard';
import { DebitCard } from './debitCard';
import { Currency } from './currency';
import { RecurrentPayment } from './recurrentPayment';
import { Provider } from './provider';
import { PaymentType } from './paymentType';

@JsonObject('Payment')
export class Payment {
  @JsonProperty('ServiceTaxAmount', Number, true)
  public serviceTaxAmount: number = undefined;

  @JsonProperty('Installments', Number, true)
  public installments: number = undefined;

  @JsonProperty('Interest', Any, true)
  public interest: string = undefined;

  @JsonProperty('Capture', Boolean, true)
  public capture: boolean = undefined;

  @JsonProperty('Authenticate', Boolean, true)
  public authenticate: boolean = undefined;

  @JsonProperty('Recurrent', Boolean, true)
  public recurrent: boolean = undefined;

  @JsonProperty('RecurrentPayment', RecurrentPayment, true)
  public recurrentPayment: RecurrentPayment;

  @JsonProperty('CreditCard', CreditCard, true)
  public creditCard: CreditCard = undefined;

  @JsonProperty('DebitCard', DebitCard, true)
  public debitCard: DebitCard = undefined;

  @JsonProperty('Tid', String, true)
  public tid: string = undefined;

  @JsonProperty('ProofOfSale', String, true)
  public proofOfSale: string = undefined;

  @JsonProperty('AuthorizationCode', String, true)
  public authorizationCode: string = undefined;

  @JsonProperty('SoftDescriptor', String, true)
  public softDescriptor: string = undefined;

  @JsonProperty('ReturnUrl', String, true)
  public returnUrl: string = undefined;

  @JsonProperty('Provider', String, true)
  public provider: Provider;

  @JsonProperty('PaymentId', String, true)
  public paymentId: string = undefined;

  @JsonProperty('Type', PaymentType, true)
  public type: PaymentType;

  @JsonProperty('Amount', Number, true)
  public amount: number = undefined;

  @JsonProperty('ReceivedDate', String, true)
  public receivedDate: string = undefined;

  @JsonProperty('CapturedAmount', Number, true)
  public capturedAmount: number = undefined;

  @JsonProperty('CapturedDate', String, true)
  public capturedDate: string = undefined;

  @JsonProperty('Currency', Currency, true)
  public currency: Currency;

  @JsonProperty('Country', String, true)
  public country: string = undefined;

  @JsonProperty('ReturnCode', String, true)
  public returnCode: string = undefined;

  @JsonProperty('ReturnMessage', String, true)
  public returnMessage: string = undefined;

  @JsonProperty('Status', Number, true)
  public status: number = undefined;

  @JsonProperty('Links', [Object], true)
  public links: Object[] = undefined;

  @JsonProperty('ExtraDataCollection', [Object], true)
  public extraDataCollection: Object[] = undefined;

  @JsonProperty('ExpirationDate', String, true)
  public expirationDate: string = undefined;

  @JsonProperty('Url', String, true)
  public url: string = undefined;

  @JsonProperty('Number', String, true)
  public number: string = undefined;

  @JsonProperty('BarCodeNumber', String, true)
  public barCodeNumber: string = undefined;

  @JsonProperty('DigitableLine', String, true)
  public digitableLine: string = undefined;

  @JsonProperty('Address', String, true)
  public address: string = undefined;
  @JsonProperty('BoletoNumber', String, true)
  public boletoNumber: string = undefined;

  @JsonProperty('Assignor', String, true)
  public assignor: string = undefined;

  @JsonProperty('Demonstrative', String, true)
  public demonstrative: string = undefined;

  @JsonProperty('Identification', String, true)
  public identification: string = undefined;

  @JsonProperty('Instructions', String, true)
  public instructions: string = undefined;

  @JsonProperty('AuthenticationUrl', String, true)
  public authenticationUrl: string = undefined;

  constructor(amount: number, installments: number) {
    this.amount = amount;
    this.installments = installments;
  }

  setCreditCard(creditCard: CreditCard) {
    this.creditCard = creditCard;
    this.type = creditCard.getType();
  }

  setDebitCard(debitCard: DebitCard) {
    this.debitCard = debitCard;
    this.type = debitCard.getType();
  }
}
