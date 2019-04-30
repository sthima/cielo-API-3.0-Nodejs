import { Currency } from './currency';
import { PaymentInterval } from './paymentInterval';
import { Provider } from './provider';
export declare class RecurrentPayment {
    recurrentPaymentId: string;
    nextRecurrency: string;
    startDate: string;
    endDate: string;
    interval: PaymentInterval;
    amount: number;
    country: string;
    createDate: string;
    currency: Currency;
    currentRecurrencyTry: number;
    provider: Provider;
    recurrencyDay: number;
    successfulRecurrences: number;
    authorizeNow: boolean;
    reasonCode: number;
    reasonMessage: string;
    status: number;
    links: any[];
    recurrentTransaction: any;
}
