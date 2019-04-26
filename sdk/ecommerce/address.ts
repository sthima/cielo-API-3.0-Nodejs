import { JsonProperty, JsonObject } from 'json2typescript';

@JsonObject('Address')
export class Address {
  @JsonProperty('Street', String, true)
  public street: string;

  @JsonProperty('Number', String, true)
  public number: string;

  @JsonProperty('Complement', String, true)
  public complement: string;

  @JsonProperty('ZipCode', String, true)
  public zipCode: string;

  @JsonProperty('City', String, true)
  public city: string;

  @JsonProperty('State', String, true)
  public state: string;

  @JsonProperty('Country', String, true)
  public country: string;
}
