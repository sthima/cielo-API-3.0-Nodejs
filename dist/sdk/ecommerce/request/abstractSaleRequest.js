"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpRequest = require("request-promise");
const uuidv4 = require("uuid/v4");
class AbstractSaleRequest {
    constructor(merchant, environment) {
        this.merchant = merchant;
        this.environment = environment;
    }
    async sendRequest(request) {
        request.headers['Accept'] = 'application/json';
        request.headers['User-Agent'] = 'CieloEcommerce/3.0 Node.js SDK';
        request.headers['MerchantId'] = this.merchant.id;
        request.headers['MerchantKey'] = this.merchant.key;
        request.headers['RequestId'] = uuidv4();
        request.json = true;
        try {
            const result = await httpRequest(request);
            return result;
        }
        catch (err) {
            throw err.error[0];
        }
    }
}
exports.AbstractSaleRequest = AbstractSaleRequest;
//# sourceMappingURL=abstractSaleRequest.js.map