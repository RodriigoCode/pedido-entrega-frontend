export type User = {
  _id: string;
  email: string;
  nome: string;
  endereco: string;
  cidade: string;
  pais: string;
};

export type MenuItem = {
  _id: string;
  nome: string;
  preco: number;
};

export type Restaurant = {
  _id: string;
  user: string;
  NomeRestaurante: string;
  Cidade: string;
  Pais: string;
  precoentrega: number;
  estimatedDeliveryTime: number;
  cozinhas: string[];
  Carrinho: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
};

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type Order = {
  _id: string;
  restaurant: Restaurant;
  user: User;
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    addressLine1: string;
    city: string;
    email: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  restaurantId: string;
};

export type RestaurantSearchResponse = {
  data: Restaurant[];
  pagination: {
    total: number;
    page: number;
    pages: number;
  };
};