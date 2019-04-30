"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSaleRequest_1 = require("./abstractSaleRequest");
const cardToken_1 = require("../cardToken");
const json2typescript_1 = require("json2typescript");
const jsonConvert = new json2typescript_1.JsonConvert();
class CreateCardTokenRequest extends abstractSaleRequest_1.AbstractSaleRequest {
    constructor(merchant, environment) {
        super(merchant, environment);
    }
    async execute(param) {
        const url = this.environment.getApiUrl() + '1/card/';
        const request = { method: 'POST', url, headers: {} };
        request.body = param;
        const response = await this.sendRequest(request);
        return jsonConvert.deserialize(response, cardToken_1.CardToken);
    }
}
exports.CreateCardTokenRequest = CreateCardTokenRequest;
//# sourceMappingURL=createCardTokenRequest.js.map