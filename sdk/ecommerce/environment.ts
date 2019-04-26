import { IEnvironment } from '../environment';

export class Environment implements IEnvironment {
  private apiUrl: string;
  private apiQueryUrl: string;

  public static PRODUCTION() {
    return new Environment(
      'https://api.cieloecommerce.cielo.com.br/',
      'https://apiquery.cieloecommerce.cielo.com.br/'
    );
  }

  public static SANDBOX() {
    return new Environment(
      'https://apisandbox.cieloecommerce.cielo.com.br/',
      'https://apiquerysandbox.cieloecommerce.cielo.com.br/'
    );
  }

  constructor(apiUrl: string, apiQueryUrl: string) {
    this.apiUrl = apiUrl;
    this.apiQueryUrl = apiQueryUrl;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getApiQueryURL(): string {
    return this.apiQueryUrl;
  }
}
