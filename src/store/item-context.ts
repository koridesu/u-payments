import React from 'react';
import { Item, ItemContextType } from '../interfaces/item-interface';

const defaultValue: ItemContextType = {
  selectedItemId: '',
  items: [] as Item[],
  listItemByCategory(category: string) {},
  setItems([]: Item[]) {},
  setSelectedItemId(id: string) {},
};
export const ItemContext = React.createContext(defaultValue);
