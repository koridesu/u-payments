export interface Item {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
}

export interface FilterInterface {
  nameFilter?: string;
  categoryFilter?: string;
}
