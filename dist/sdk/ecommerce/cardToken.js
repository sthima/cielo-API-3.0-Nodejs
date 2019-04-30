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
let CardToken = class CardToken {
    constructor() {
        this.brand = undefined;
        this.cardNumber = undefined;
        this.cardToken = undefined;
        this.customerName = undefined;
        this.expirationDate = undefined;
        this.links = undefined;
        this.holder = undefined;
    }
    setBrand(value) {
        this.brand = value;
        return this;
    }
    setCardNumber(value) {
        this.cardNumber = value;
        return this;
    }
    setHolder(holder) {
        this.holder = holder;
        if (!this.customerName) {
            this.customerName = holder;
        }
        return this;
    }
    setExpirationDate(value) {
        this.expirationDate = value;
        return this;
    }
};
__decorate([
    json2typescript_1.JsonProperty('Brand', String, true),
    __metadata("design:type", String)
], CardToken.prototype, "brand", void 0);
__decorate([
    json2typescript_1.JsonProperty('CardNumber', String, true),
    __metadata("design:type", String)
], CardToken.prototype, "cardNumber", void 0);
__decorate([
    json2typescript_1.JsonProperty('CardToken', String, true),
    __metadata("design:type", String)
], CardToken.prototype, "cardToken", void 0);
__decorate([
    json2typescript_1.JsonProperty('CustomerName', String, true),
    __metadata("design:type", String)
], CardToken.prototype, "customerName", void 0);
__decorate([
    json2typescript_1.JsonProperty('ExpirationDate', String, true),
    __metadata("design:type", String)
], CardToken.prototype, "expirationDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Links', [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], CardToken.prototype, "links", void 0);
__decorate([
    json2typescript_1.JsonProperty('Holder', String, true),
    __metadata("design:type", String)
], CardToken.prototype, "holder", void 0);
CardToken = __decorate([
    json2typescript_1.JsonObject('CardToken')
], CardToken);
exports.CardToken = CardToken;
//# sourceMappingURL=cardToken.js.map