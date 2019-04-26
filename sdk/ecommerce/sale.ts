import { JsonProperty, JsonObject } from 'json2typescript';

import { Payment } from './payment';
import { Customer } from './customer';

@JsonObject('Sale')
export class Sale {
  @JsonProperty('MerchantOrderId', String, true)
  public merchantOrderId: string = '';

  @JsonProperty('Customer', Customer, true)
  public customer: Customer = undefined;

  @JsonProperty('Payment', Payment, true)
  public payment: Payment = undefined;

  constructor(merchantOrderId: string = '') {
    this.merchantOrderId = merchantOrderId;
  }

  public setPayment(amount: number, installments = 1) {
    this.payment = new Payment(amount, installments);
  }

  public setCustomer(name: string) {
    this.customer = new Customer(name);
  }
}
