export interface Purchase {
  id: number;
  customername: string;
  purchaseDate: string;
  items: PurchaseItem;
  totalPrice: number;
}

export interface PurchaseItem {
  productId: number;
  quantity: number;
  price: number;
}
