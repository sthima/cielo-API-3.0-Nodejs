import { Payment } from './payment';
import { Customer } from './customer';
export declare class Sale {
    merchantOrderId: string;
    customer: Customer;
    payment: Payment;
    constructor(merchantOrderId?: string);
    setPayment(amount: number, installments?: number): void;
    setCustomer(name: string): void;
}
