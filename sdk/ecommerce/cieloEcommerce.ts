import { Merchant } from '../merchant';
import { Environment } from './environment';
import { Sale } from './sale';
import { CreateSaleRequest } from './request/createSaleRequest';
import { SaleResponse } from './saleResponse';
import { UpdateSaleRequest } from './request/updateSaleRequest';
import { CreateCardTokenRequest } from './request/createCardTokenRequest';
import { CardToken } from './cardToken';

export class CieloEcommerce {
  private merchant: Merchant;
  private environment: Environment;

  constructor(merchant: Merchant, environment: Environment = Environment.PRODUCTION()) {
    this.merchant = merchant;
    this.environment = environment;
  }

  public async createSale(sale: Sale): Promise<Sale> {
    const createSaleRequest = new CreateSaleRequest(this.merchant, this.environment);

    sale = await createSaleRequest.execute(sale);
    return sale;
  }

  public async captureSale(paymentId: string, amount: number, serviceTaxAmount: number): Promise<SaleResponse> {
    const updateSaleRequest: UpdateSaleRequest = new UpdateSaleRequest('capture', this.merchant, this.environment);

    updateSaleRequest.amount = amount;
    updateSaleRequest.serviceTaxAmount = serviceTaxAmount;

    const sale: SaleResponse = await updateSaleRequest.execute(paymentId);

    return sale;
  }

  public async cancelSale(paymentId: string, amount: number = null) {
    const updateSaleRequest: UpdateSaleRequest = new UpdateSaleRequest('void', this.merchant, this.environment);

    updateSaleRequest.amount = amount;

    const sale: SaleResponse = await updateSaleRequest.execute(paymentId);
    return sale;
  }

  public async createCardToken(cardToken: CardToken) {
    const createCardTokenRequest = new CreateCardTokenRequest(this.merchant, this.environment);

    cardToken = await createCardTokenRequest.execute(cardToken);

    return cardToken;
  }
}
