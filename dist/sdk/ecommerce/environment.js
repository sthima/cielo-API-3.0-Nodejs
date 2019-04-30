"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Environment {
    static PRODUCTION() {
        return new Environment('https://api.cieloecommerce.cielo.com.br/', 'https://apiquery.cieloecommerce.cielo.com.br/');
    }
    static SANDBOX() {
        return new Environment('https://apisandbox.cieloecommerce.cielo.com.br/', 'https://apiquerysandbox.cieloecommerce.cielo.com.br/');
    }
    constructor(apiUrl, apiQueryUrl) {
        this.apiUrl = apiUrl;
        this.apiQueryUrl = apiQueryUrl;
    }
    getApiUrl() {
        return this.apiUrl;
    }
    getApiQueryURL() {
        return this.apiQueryUrl;
    }
}
exports.Environment = Environment;
//# sourceMappingURL=environment.js.map