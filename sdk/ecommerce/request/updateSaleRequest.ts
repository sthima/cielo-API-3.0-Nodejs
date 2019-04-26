var querystring = require('querystring');

import { AbstractSaleRequest } from './abstractSaleRequest';
import { SaleResponse } from '../saleResponse';
import { Merchant } from '../../merchant';
import { Environment } from '../environment';
import { RequestOptions } from './requestOptions';

import { JsonConvert } from 'json2typescript';
const jsonConvert: JsonConvert = new JsonConvert();

export class UpdateSaleRequest extends AbstractSaleRequest<string, SaleResponse> {
  public readonly type: string;
  public amount: number;
  public serviceTaxAmount: number;

  constructor(type: string, merchant: Merchant, environment: Environment) {
    super(merchant, environment);
    this.type = type;
  }

  public async execute(paymentId: string): Promise<SaleResponse> {

    let url = this.environment.getApiUrl() + '1/sales/' + paymentId + '/' + this.type;
    let params: any = {};

    try {
      if (this.amount) {
        params.amount = this.amount;
      }

      if (this.serviceTaxAmount) {
        params.serviceTaxAmount = this.serviceTaxAmount;
      }

      url += '?' + querystring.encode(params);

      const request: RequestOptions = { method: 'PUT', url, headers: {} };

      const response = await this.sendRequest(request);
      return jsonConvert.deserialize(response, SaleResponse) as any;
    } catch (err) {
      throw err;
    }
  }
}
