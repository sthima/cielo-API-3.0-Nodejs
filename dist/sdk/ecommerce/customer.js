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
const address_1 = require("./address");
const json2typescript_1 = require("json2typescript");
let Customer = class Customer {
    constructor(name = '') {
        this.name = undefined;
        this.email = undefined;
        this.birthDate = undefined;
        this.identity = undefined;
        this.identityType = undefined;
        this.address = undefined;
        this.deliveryAddress = undefined;
        this.name = name;
    }
};
__decorate([
    json2typescript_1.JsonProperty('Name', String, true),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty('Email', String, true),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    json2typescript_1.JsonProperty('BirthDate', String, true),
    __metadata("design:type", String)
], Customer.prototype, "birthDate", void 0);
__decorate([
    json2typescript_1.JsonProperty('Identity', String, true),
    __metadata("design:type", String)
], Customer.prototype, "identity", void 0);
__decorate([
    json2typescript_1.JsonProperty('IdentityType', String, true),
    __metadata("design:type", String)
], Customer.prototype, "identityType", void 0);
__decorate([
    json2typescript_1.JsonProperty('Address', address_1.Address, true),
    __metadata("design:type", address_1.Address)
], Customer.prototype, "address", void 0);
__decorate([
    json2typescript_1.JsonProperty('DeliveryAddress', address_1.Address, true),
    __metadata("design:type", address_1.Address)
], Customer.prototype, "deliveryAddress", void 0);
Customer = __decorate([
    json2typescript_1.JsonObject('Customer'),
    __metadata("design:paramtypes", [String])
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map