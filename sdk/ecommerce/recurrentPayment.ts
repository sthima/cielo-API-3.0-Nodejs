import { JsonProperty, JsonObject, Any } from 'json2typescript';
import { Currency } from './currency';
import { PaymentInterval } from './paymentInterval';
import { Provider } from './provider';

@JsonObject('RecurrentPayment')
export class RecurrentPayment {
  @JsonProperty('RecurrentPaymentId', String, true)
  public recurrentPaymentId: string = undefined;

  @JsonProperty('NextRecurrency', String, true)
  public nextRecurrency: string = undefined;

  @JsonProperty('StartDate', String, true)
  public startDate: string = undefined;

  @JsonProperty('EndDate', String, true)
  public endDate: string = undefined;

  @JsonProperty('Interval', Any, true)
  public interval: PaymentInterval = undefined;

  @JsonProperty('Amount', Number, true)
  public amount: number = undefined;

  @JsonProperty('Country', String, true)
  public country: string = undefined;

  @JsonProperty('CreateDate', String, true)
  public createDate: string = undefined;

  @JsonProperty('Currency', Currency, true)
  public currency: Currency = undefined;

  @JsonProperty('CurrentRecurrencyTry', Number, true)
  public currentRecurrencyTry: number = undefined;

  @JsonProperty('Provider', Provider, true)
  public provider: Provider = undefined;

  @JsonProperty('RecurrencyDay', Number, true)
  public recurrencyDay: number = undefined;

  @JsonProperty('SuccessfulRecurrences', Number, true)
  public successfulRecurrences: number = undefined;

  @JsonProperty('AuthorizeNow', Boolean, true)
  public authorizeNow: boolean = undefined;

  @JsonProperty('ReasonCode', Number, true)
  public reasonCode: number = undefined;

  @JsonProperty('ReasonMessage', String, true)
  public reasonMessage: string = undefined;

  @JsonProperty('Status', String, true)
  public status: number = undefined;

  @JsonProperty('Links', [Any], true)
  public links: any[] = undefined;

  @JsonProperty('RecurrentTransactions', [Any], true)
  public recurrentTransaction: any = undefined;
}
