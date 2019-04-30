"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSaleRequest_1 = require("./abstractSaleRequest");
const sale_1 = require("../sale");
const json2typescript_1 = require("json2typescript");
const jsonConvert = new json2typescript_1.JsonConvert();
class CreateSaleRequest extends abstractSaleRequest_1.AbstractSaleRequest {
    constructor(merchant, environment) {
        super(merchant, environment);
    }
    async execute(param) {
        const url = this.environment.getApiUrl() + '1/sales/';
        const request = { method: 'POST', url, headers: {} };
        request.body = param;
        const response = await this.sendRequest(request);
        return jsonConvert.deserialize(response, sale_1.Sale);
    }
}
exports.CreateSaleRequest = CreateSaleRequest;
//# sourceMappingURL=createSaleRequest.js.map