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
const currency_1 = require("./currency");
const paymentInterval_1 = require("./paymentInterval");
const provider_1 = require("./provider");
let RecurrentPayment = class RecurrentPayment {
    constructor() {
        this.recurrentPaymentId = undefined;
        this.nextRecurrency = undefined;
        this.startDate = undefined;
        this.endDate = undefined;
        this.interval = undefined;
        this.amount = undefined;
        this.country = undefined;
        this.createDate = undefined;
        this.currency = undefined;
        this.currentRecurrencyTry = undefined;
        this.provider = undefined;
        this.recurrencyDay = undefined;
        this.successfulRecurrences = undefined;
        this.authorizeNow = undefined;
        this.reasonCode = undefined;
        this.reasonMessage = undefined;
        this.status = undefined;
        this.links = undefined;
        this.recurrentTransaction = undefined;
    }
};
__decorate([
    json2typescript_1.JsonProperty('RecurrentPaymentId', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "recurrentPaymentId", void 0);
__decorate([
    json2typescript_1.JsonProperty('NextRecurrency', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "nextRecurrency", void 0);
__decorate([
    json2typescript_1.JsonProperty('StartDate', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "startDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('EndDate', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "endDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Interval', json2typescript_1.Any, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "interval", void 0);
__decorate([
    json2typescript_1.JsonProperty('Amount', Number, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "amount", void 0);
__decorate([
    json2typescript_1.JsonProperty('Country', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "country", void 0);
__decorate([
    json2typescript_1.JsonProperty('CreateDate', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "createDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Currency', currency_1.Currency, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "currency", void 0);
__decorate([
    json2typescript_1.JsonProperty('CurrentRecurrencyTry', Number, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "currentRecurrencyTry", void 0);
__decorate([
    json2typescript_1.JsonProperty('Provider', provider_1.Provider, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "provider", void 0);
__decorate([
    json2typescript_1.JsonProperty('RecurrencyDay', Number, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "recurrencyDay", void 0);
__decorate([
    json2typescript_1.JsonProperty('SuccessfulRecurrences', Number, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "successfulRecurrences", void 0);
__decorate([
    json2typescript_1.JsonProperty('AuthorizeNow', Boolean, true),
    __metadata("design:type", Boolean)
], RecurrentPayment.prototype, "authorizeNow", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReasonCode', Number, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "reasonCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReasonMessage', String, true),
    __metadata("design:type", String)
], RecurrentPayment.prototype, "reasonMessage", void 0);
__decorate([
    json2typescript_1.JsonProperty('Status', String, true),
    __metadata("design:type", Number)
], RecurrentPayment.prototype, "status", void 0);
__decorate([
    json2typescript_1.JsonProperty('Links', [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], RecurrentPayment.prototype, "links", void 0);
__decorate([
    json2typescript_1.JsonProperty('RecurrentTransactions', [json2typescript_1.Any], true),
    __metadata("design:type", Object)
], RecurrentPayment.prototype, "recurrentTransaction", void 0);
RecurrentPayment = __decorate([
    json2typescript_1.JsonObject('RecurrentPayment')
], RecurrentPayment);
exports.RecurrentPayment = RecurrentPayment;
//# sourceMappingURL=recurrentPayment.js.map