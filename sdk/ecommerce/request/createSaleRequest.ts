import { AbstractSaleRequest } from './abstractSaleRequest';
import { Sale } from '../sale';
import { Merchant } from '../../merchant';
import { Environment } from '../environment';
import { RequestOptions } from './requestOptions';

import { JsonConvert } from 'json2typescript';
const jsonConvert: JsonConvert = new JsonConvert();

export class CreateSaleRequest extends AbstractSaleRequest<Sale, Sale> {
  constructor(merchant: Merchant, environment: Environment) {
    super(merchant, environment);
  }

  public async execute(param: Sale): Promise<Sale> {
    const url = this.environment.getApiUrl() + '1/sales/';
    const request: RequestOptions = { method: 'POST', url, headers: {} };
    request.body = param;

    const response = await this.sendRequest(request);
    return jsonConvert.deserialize(response, Sale) as any;
  }
}
