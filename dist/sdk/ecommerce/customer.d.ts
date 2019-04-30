import { Address } from './address';
export declare class Customer {
    name: string;
    email: string;
    birthDate: string;
    identity: string;
    identityType: string;
    address: Address;
    deliveryAddress: Address;
    constructor(name?: string);
}
