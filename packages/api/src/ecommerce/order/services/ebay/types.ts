export interface EbayOrderInput {
  orderId: string;
  orderDate: string;
  orderStatus: string;
  totalPrice: number;
  currency: string;
  buyer: {
    id: string;
    name: string;
  };
}

export type EbayOrderOutput = Partial<EbayOrderInput>;
