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
const creditCard_1 = require("./creditCard");
const debitCard_1 = require("./debitCard");
const currency_1 = require("./currency");
const recurrentPayment_1 = require("./recurrentPayment");
const provider_1 = require("./provider");
const paymentType_1 = require("./paymentType");
let Payment = class Payment {
    constructor(amount, installments = 1) {
        this.serviceTaxAmount = undefined;
        this.installments = undefined;
        this.interest = undefined;
        this.capture = undefined;
        this.authenticate = undefined;
        this.recurrent = undefined;
        this.creditCard = undefined;
        this.debitCard = undefined;
        this.tid = undefined;
        this.proofOfSale = undefined;
        this.authorizationCode = undefined;
        this.softDescriptor = undefined;
        this.returnUrl = undefined;
        this.paymentId = undefined;
        this.amount = undefined;
        this.receivedDate = undefined;
        this.capturedAmount = undefined;
        this.capturedDate = undefined;
        this.country = undefined;
        this.returnCode = undefined;
        this.returnMessage = undefined;
        this.status = undefined;
        this.links = undefined;
        this.extraDataCollection = undefined;
        this.expirationDate = undefined;
        this.url = undefined;
        this.number = undefined;
        this.barCodeNumber = undefined;
        this.digitableLine = undefined;
        this.address = undefined;
        this.boletoNumber = undefined;
        this.assignor = undefined;
        this.demonstrative = undefined;
        this.identification = undefined;
        this.instructions = undefined;
        this.authenticationUrl = undefined;
        this.amount = amount;
        this.installments = installments;
    }
    setCreditCard(creditCard) {
        this.creditCard = creditCard;
        this.type = creditCard.getType();
    }
    setDebitCard(debitCard) {
        this.debitCard = debitCard;
        this.type = debitCard.getType();
    }
};
__decorate([
    json2typescript_1.JsonProperty('ServiceTaxAmount', Number, true),
    __metadata("design:type", Number)
], Payment.prototype, "serviceTaxAmount", void 0);
__decorate([
    json2typescript_1.JsonProperty('Installments', Number, true),
    __metadata("design:type", Number)
], Payment.prototype, "installments", void 0);
__decorate([
    json2typescript_1.JsonProperty('Interest', json2typescript_1.Any, true),
    __metadata("design:type", String)
], Payment.prototype, "interest", void 0);
__decorate([
    json2typescript_1.JsonProperty('Capture', Boolean, true),
    __metadata("design:type", Boolean)
], Payment.prototype, "capture", void 0);
__decorate([
    json2typescript_1.JsonProperty('Authenticate', Boolean, true),
    __metadata("design:type", Boolean)
], Payment.prototype, "authenticate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Recurrent', Boolean, true),
    __metadata("design:type", Boolean)
], Payment.prototype, "recurrent", void 0);
__decorate([
    json2typescript_1.JsonProperty('RecurrentPayment', recurrentPayment_1.RecurrentPayment, true),
    __metadata("design:type", recurrentPayment_1.RecurrentPayment)
], Payment.prototype, "recurrentPayment", void 0);
__decorate([
    json2typescript_1.JsonProperty('CreditCard', creditCard_1.CreditCard, true),
    __metadata("design:type", creditCard_1.CreditCard)
], Payment.prototype, "creditCard", void 0);
__decorate([
    json2typescript_1.JsonProperty('DebitCard', debitCard_1.DebitCard, true),
    __metadata("design:type", debitCard_1.DebitCard)
], Payment.prototype, "debitCard", void 0);
__decorate([
    json2typescript_1.JsonProperty('Tid', String, true),
    __metadata("design:type", String)
], Payment.prototype, "tid", void 0);
__decorate([
    json2typescript_1.JsonProperty('ProofOfSale', String, true),
    __metadata("design:type", String)
], Payment.prototype, "proofOfSale", void 0);
__decorate([
    json2typescript_1.JsonProperty('AuthorizationCode', String, true),
    __metadata("design:type", String)
], Payment.prototype, "authorizationCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('SoftDescriptor', String, true),
    __metadata("design:type", String)
], Payment.prototype, "softDescriptor", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReturnUrl', String, true),
    __metadata("design:type", String)
], Payment.prototype, "returnUrl", void 0);
__decorate([
    json2typescript_1.JsonProperty('Provider', String, true),
    __metadata("design:type", Number)
], Payment.prototype, "provider", void 0);
__decorate([
    json2typescript_1.JsonProperty('PaymentId', String, true),
    __metadata("design:type", String)
], Payment.prototype, "paymentId", void 0);
__decorate([
    json2typescript_1.JsonProperty('Type', paymentType_1.PaymentType, true),
    __metadata("design:type", String)
], Payment.prototype, "type", void 0);
__decorate([
    json2typescript_1.JsonProperty('Amount', Number, true),
    __metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReceivedDate', String, true),
    __metadata("design:type", String)
], Payment.prototype, "receivedDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('CapturedAmount', Number, true),
    __metadata("design:type", Number)
], Payment.prototype, "capturedAmount", void 0);
__decorate([
    json2typescript_1.JsonProperty('CapturedDate', String, true),
    __metadata("design:type", String)
], Payment.prototype, "capturedDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Currency', currency_1.Currency, true),
    __metadata("design:type", Number)
], Payment.prototype, "currency", void 0);
__decorate([
    json2typescript_1.JsonProperty('Country', String, true),
    __metadata("design:type", String)
], Payment.prototype, "country", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReturnCode', String, true),
    __metadata("design:type", String)
], Payment.prototype, "returnCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReturnMessage', String, true),
    __metadata("design:type", String)
], Payment.prototype, "returnMessage", void 0);
__decorate([
    json2typescript_1.JsonProperty('Status', Number, true),
    __metadata("design:type", Number)
], Payment.prototype, "status", void 0);
__decorate([
    json2typescript_1.JsonProperty('Links', [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], Payment.prototype, "links", void 0);
__decorate([
    json2typescript_1.JsonProperty('ExtraDataCollection', [Object], true),
    __metadata("design:type", Array)
], Payment.prototype, "extraDataCollection", void 0);
__decorate([
    json2typescript_1.JsonProperty('ExpirationDate', String, true),
    __metadata("design:type", String)
], Payment.prototype, "expirationDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Url', String, true),
    __metadata("design:type", String)
], Payment.prototype, "url", void 0);
__decorate([
    json2typescript_1.JsonProperty('Number', String, true),
    __metadata("design:type", String)
], Payment.prototype, "number", void 0);
__decorate([
    json2typescript_1.JsonProperty('BarCodeNumber', String, true),
    __metadata("design:type", String)
], Payment.prototype, "barCodeNumber", void 0);
__decorate([
    json2typescript_1.JsonProperty('DigitableLine', String, true),
    __metadata("design:type", String)
], Payment.prototype, "digitableLine", void 0);
__decorate([
    json2typescript_1.JsonProperty('Address', String, true),
    __metadata("design:type", String)
], Payment.prototype, "address", void 0);
__decorate([
    json2typescript_1.JsonProperty('BoletoNumber', String, true),
    __metadata("design:type", String)
], Payment.prototype, "boletoNumber", void 0);
__decorate([
    json2typescript_1.JsonProperty('Assignor', String, true),
    __metadata("design:type", String)
], Payment.prototype, "assignor", void 0);
__decorate([
    json2typescript_1.JsonProperty('Demonstrative', String, true),
    __metadata("design:type", String)
], Payment.prototype, "demonstrative", void 0);
__decorate([
    json2typescript_1.JsonProperty('Identification', String, true),
    __metadata("design:type", String)
], Payment.prototype, "identification", void 0);
__decorate([
    json2typescript_1.JsonProperty('Instructions', String, true),
    __metadata("design:type", String)
], Payment.prototype, "instructions", void 0);
__decorate([
    json2typescript_1.JsonProperty('AuthenticationUrl', String, true),
    __metadata("design:type", String)
], Payment.prototype, "authenticationUrl", void 0);
Payment = __decorate([
    json2typescript_1.JsonObject('Payment'),
    __metadata("design:paramtypes", [Number, Number])
], Payment);
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map