import { Environment } from '../environment';
import { Merchant } from '../../merchant';
import { RequestOptions } from './requestOptions';
export declare abstract class AbstractSaleRequest<Request, Response> {
    readonly environment: Environment;
    private readonly merchant;
    abstract execute(param: Request): Promise<Response>;
    constructor(merchant: Merchant, environment: Environment);
    sendRequest(request: RequestOptions): Promise<any>;
}
