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
const cardBrands_1 = require("./cardBrands");
let Card = class Card {
    constructor(securityCode, brand) {
        this.cardNumber = undefined;
        this.holder = undefined;
        this.expirationDate = undefined;
        this.securityCode = undefined;
        this.brand = undefined;
        this.securityCode = securityCode;
        this.brand = brand;
    }
    setExpirationDate(value) {
        this.expirationDate = value;
        return this;
    }
    setCardNumber(value) {
        this.cardNumber = value;
        return this;
    }
    setHolder(value) {
        this.holder = value;
        return this;
    }
    getType() {
        return this.type;
    }
};
__decorate([
    json2typescript_1.JsonProperty('CardNumber', String, true),
    __metadata("design:type", String)
], Card.prototype, "cardNumber", void 0);
__decorate([
    json2typescript_1.JsonProperty('Holder', String, true),
    __metadata("design:type", String)
], Card.prototype, "holder", void 0);
__decorate([
    json2typescript_1.JsonProperty('ExpirationDate', String, true),
    __metadata("design:type", String)
], Card.prototype, "expirationDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('SecurityCode', String, true),
    __metadata("design:type", String)
], Card.prototype, "securityCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('Brand', String, true),
    __metadata("design:type", String)
], Card.prototype, "brand", void 0);
Card = __decorate([
    json2typescript_1.JsonObject('Card'),
    __metadata("design:paramtypes", [String, String])
], Card);
exports.Card = Card;
//# sourceMappingURL=card.js.map