import { Currency } from './currency';
import { PaymentInterval } from './paymentInterval';
import { Provider } from './provider';

export class RecurrentPayment {
  public recurrentPaymentId: string;

  public nextRecurrency: string;

  public startDate: string;

  public endDate: string;

  public interval: PaymentInterval;

  public amount: number;

  public country: string;

  public createDate: string;

  public currency: Currency;

  public currentRecurrencyTry: number;

  public provider: Provider;

  public recurrencyDay: number;

  public successfulRecurrences: number;

  public authorizeNow: boolean;

  public reasonCode: number;

  public reasonMessage: string;

  public status: number;

  public links: Object[];
}
