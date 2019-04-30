"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./environment");
const createSaleRequest_1 = require("./request/createSaleRequest");
const updateSaleRequest_1 = require("./request/updateSaleRequest");
const createCardTokenRequest_1 = require("./request/createCardTokenRequest");
class CieloEcommerce {
    constructor(merchant, environment = environment_1.Environment.PRODUCTION()) {
        this.merchant = merchant;
        this.environment = environment;
    }
    async createSale(sale) {
        const createSaleRequest = new createSaleRequest_1.CreateSaleRequest(this.merchant, this.environment);
        sale = await createSaleRequest.execute(sale);
        return sale;
    }
    async captureSale(paymentId, amount, serviceTaxAmount) {
        const updateSaleRequest = new updateSaleRequest_1.UpdateSaleRequest('capture', this.merchant, this.environment);
        updateSaleRequest.amount = amount;
        updateSaleRequest.serviceTaxAmount = serviceTaxAmount;
        const sale = await updateSaleRequest.execute(paymentId);
        return sale;
    }
    async cancelSale(paymentId, amount = null) {
        const updateSaleRequest = new updateSaleRequest_1.UpdateSaleRequest('void', this.merchant, this.environment);
        updateSaleRequest.amount = amount;
        const sale = await updateSaleRequest.execute(paymentId);
        return sale;
    }
    async createCardToken(cardToken) {
        const createCardTokenRequest = new createCardTokenRequest_1.CreateCardTokenRequest(this.merchant, this.environment);
        cardToken = await createCardTokenRequest.execute(cardToken);
        return cardToken;
    }
}
exports.CieloEcommerce = CieloEcommerce;
//# sourceMappingURL=cieloEcommerce.js.map