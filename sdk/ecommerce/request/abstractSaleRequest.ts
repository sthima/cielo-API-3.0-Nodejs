import * as httpRequest from 'request-promise';
import * as uuidv4 from 'uuid/v4';

import { Environment } from '../environment';
import { Merchant } from '../../merchant';
import { RequestOptions } from './requestOptions';

export abstract class AbstractSaleRequest<Request, Response> {
  public readonly environment: Environment;
  private readonly merchant: Merchant;

  public abstract async execute(param: Request): Promise<Response>;

  constructor(merchant: Merchant, environment: Environment) {
    this.merchant = merchant;
    this.environment = environment;
  }

  public async sendRequest(request: RequestOptions) {
    request.headers['Accept'] = 'application/json';
    request.headers['User-Agent'] = 'CieloEcommerce/3.0 Node.js SDK';
    request.headers['MerchantId'] = this.merchant.id;
    request.headers['MerchantKey'] = this.merchant.key;
    request.headers['RequestId'] = uuidv4();
    request.json = true;

    try {
      const result = await httpRequest(request);
      return result;
    } catch (err) {
      throw err.error[0] || err.error;
    }
  }
}
