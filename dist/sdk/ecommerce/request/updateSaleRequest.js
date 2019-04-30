"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var querystring = require('querystring');
const abstractSaleRequest_1 = require("./abstractSaleRequest");
const saleResponse_1 = require("../saleResponse");
const json2typescript_1 = require("json2typescript");
const jsonConvert = new json2typescript_1.JsonConvert();
class UpdateSaleRequest extends abstractSaleRequest_1.AbstractSaleRequest {
    constructor(type, merchant, environment) {
        super(merchant, environment);
        this.type = type;
    }
    async execute(paymentId) {
        let url = this.environment.getApiUrl() + '1/sales/' + paymentId + '/' + this.type;
        let params = {};
        try {
            if (this.amount) {
                params.amount = this.amount;
            }
            if (this.serviceTaxAmount) {
                params.serviceTaxAmount = this.serviceTaxAmount;
            }
            url += '?' + querystring.encode(params);
            const request = { method: 'PUT', url, headers: {} };
            const response = await this.sendRequest(request);
            return jsonConvert.deserialize(response, saleResponse_1.SaleResponse);
        }
        catch (err) {
            throw err;
        }
    }
}
exports.UpdateSaleRequest = UpdateSaleRequest;
//# sourceMappingURL=updateSaleRequest.js.map