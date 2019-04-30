"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const json2typescript_1 = require("json2typescript");
const payment_1 = require("./payment");
const customer_1 = require("./customer");
let Sale = class Sale {
    constructor(merchantOrderId = '') {
        this.merchantOrderId = '';
        this.customer = undefined;
        this.payment = undefined;
        this.merchantOrderId = merchantOrderId;
    }
    setPayment(amount, installments = 1) {
        this.payment = new payment_1.Payment(amount, installments);
    }
    setCustomer(name) {
        this.customer = new customer_1.Customer(name);
    }
};
__decorate([
    json2typescript_1.JsonProperty('MerchantOrderId', String, true),
    __metadata("design:type", String)
], Sale.prototype, "merchantOrderId", void 0);
__decorate([
    json2typescript_1.JsonProperty('Customer', customer_1.Customer, true),
    __metadata("design:type", customer_1.Customer)
], Sale.prototype, "customer", void 0);
__decorate([
    json2typescript_1.JsonProperty('Payment', payment_1.Payment, true),
    __metadata("design:type", payment_1.Payment)
], Sale.prototype, "payment", void 0);
Sale = __decorate([
    json2typescript_1.JsonObject('Sale'),
    __metadata("design:paramtypes", [String])
], Sale);
exports.Sale = Sale;
//# sourceMappingURL=sale.js.map