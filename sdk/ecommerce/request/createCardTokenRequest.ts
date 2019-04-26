import { AbstractSaleRequest } from './abstractSaleRequest';
import { CardToken } from '../cardToken';
import { Merchant } from '../../merchant';
import { Environment } from '../environment';
import { RequestOptions } from './requestOptions';

import { JsonConvert } from 'json2typescript';
const jsonConvert: JsonConvert = new JsonConvert();

export class CreateCardTokenRequest extends AbstractSaleRequest<CardToken, CardToken> {
  constructor(merchant: Merchant, environment: Environment) {
    super(merchant, environment);
  }
  public async execute(param: CardToken): Promise<CardToken> {
    const url = this.environment.getApiUrl() + '1/card/';
    const request: RequestOptions = { method: 'POST', url, headers: {} };
    request.body = param;

    const response = await this.sendRequest(request);
    return jsonConvert.deserialize(response, CardToken) as any;
  }
}
