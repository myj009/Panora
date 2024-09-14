export interface EbayCustomerInput {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export type EbayCustomerOutput = Partial<EbayCustomerInput>;
