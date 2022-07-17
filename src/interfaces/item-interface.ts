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

export interface ItemContextType {
  selectedItemId?: string;
  items: Item[];
  listItemByCategory: (category: string) => void;
  setItems: (items: Item[]) => void;
  setSelectedItemId: (id: string) => void;
}
