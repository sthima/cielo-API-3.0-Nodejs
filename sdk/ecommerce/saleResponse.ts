import { JsonProperty, JsonObject, Any } from 'json2typescript';

@JsonObject('SaleResponse')
export class SaleResponse {

  @JsonProperty('MerchantOrderId', String, true)
  public merchantOrderId: string = undefined;

  @JsonProperty('Status', Any, true)
  public status: string = undefined;

  @JsonProperty('ReasonCode', Any, true)
  public reasonCode: string = undefined;

  @JsonProperty('ReasonMessage', String, true)
  public reasonMessage: string = undefined;

  @JsonProperty('ProviderReturnCode', String, true)
  public providerReturnCode: string = undefined;

  @JsonProperty('ProviderReturnMessaged', String, true)
  public providerReturnMessage: string = undefined;

  @JsonProperty('ReturnCode', String, true)
  public returnCode: string = undefined;

  @JsonProperty('ReturnMessage', String, true)
  public returnMessage: string = undefined;

  @JsonProperty('AuthenticationUrl', String, true)
  public authenticationUrl: string = undefined;

  @JsonProperty('Links', [Any], true)
  public links: any[] = undefined;
}
