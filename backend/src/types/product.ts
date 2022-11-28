export type ProductToSearch = {
  id: string;
  name: string;
  brand: string[];
  type: string[];
  package: string;
  fullName: string;
};

export type MarketPlaceItem = {
  name: string;
  key: string[];
  products: any[];
};
