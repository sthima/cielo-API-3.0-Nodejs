import { IEnvironment } from '../environment';
export declare class Environment implements IEnvironment {
    private apiUrl;
    private apiQueryUrl;
    static PRODUCTION(): Environment;
    static SANDBOX(): Environment;
    constructor(apiUrl: string, apiQueryUrl: string);
    getApiUrl(): string;
    getApiQueryURL(): string;
}
