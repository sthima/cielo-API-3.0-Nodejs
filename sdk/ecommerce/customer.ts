import { Address } from './address';

import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject('Customer')
export class Customer {
  @JsonProperty('Name', String, true)
  public name: string = undefined;

  @JsonProperty('Email', String, true)
  public email: string = undefined;

  @JsonProperty('BirthDate', String, true)
  public birthDate: string = undefined;

  @JsonProperty('Identity', String, true)
  public identity: string = undefined;

  @JsonProperty('IdentityType', String, true)
  public identityType: string = undefined;

  @JsonProperty('Address', Address, true)
  public address: Address = undefined;

  @JsonProperty('DeliveryAddress', Address, true)
  public deliveryAddress: Address = undefined;

  constructor(name: string = '') {
    this.name = name;
  }
}
