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
const card_1 = require("./card");
const paymentType_1 = require("./paymentType");
const json2typescript_1 = require("json2typescript");
let CreditCard = class CreditCard extends card_1.Card {
    constructor() {
        super(...arguments);
        this.type = paymentType_1.PaymentType.CreditCard;
        this.cardToken = undefined;
    }
    ;
    setCardToken(cardToken) {
        this.cardToken = cardToken;
        return this;
    }
};
__decorate([
    json2typescript_1.JsonProperty('ardToken', String, true),
    __metadata("design:type", String)
], CreditCard.prototype, "cardToken", void 0);
CreditCard = __decorate([
    json2typescript_1.JsonObject('CreditCard')
], CreditCard);
exports.CreditCard = CreditCard;
//# sourceMappingURL=creditCard.js.map