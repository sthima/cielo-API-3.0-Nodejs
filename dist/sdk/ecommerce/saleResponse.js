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
let SaleResponse = class SaleResponse {
    constructor() {
        this.merchantOrderId = undefined;
        this.status = undefined;
        this.reasonCode = undefined;
        this.reasonMessage = undefined;
        this.providerReturnCode = undefined;
        this.providerReturnMessage = undefined;
        this.returnCode = undefined;
        this.returnMessage = undefined;
        this.authenticationUrl = undefined;
        this.links = undefined;
    }
};
__decorate([
    json2typescript_1.JsonProperty('MerchantOrderId', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "merchantOrderId", void 0);
__decorate([
    json2typescript_1.JsonProperty('Status', json2typescript_1.Any, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "status", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReasonCode', json2typescript_1.Any, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "reasonCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReasonMessage', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "reasonMessage", void 0);
__decorate([
    json2typescript_1.JsonProperty('ProviderReturnCode', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "providerReturnCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('ProviderReturnMessaged', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "providerReturnMessage", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReturnCode', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "returnCode", void 0);
__decorate([
    json2typescript_1.JsonProperty('ReturnMessage', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "returnMessage", void 0);
__decorate([
    json2typescript_1.JsonProperty('AuthenticationUrl', String, true),
    __metadata("design:type", String)
], SaleResponse.prototype, "authenticationUrl", void 0);
__decorate([
    json2typescript_1.JsonProperty('Links', [json2typescript_1.Any], true),
    __metadata("design:type", Array)
], SaleResponse.prototype, "links", void 0);
SaleResponse = __decorate([
    json2typescript_1.JsonObject('SaleResponse')
], SaleResponse);
exports.SaleResponse = SaleResponse;
//# sourceMappingURL=saleResponse.js.map