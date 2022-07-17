import React from 'react';
import { Item } from '../interfaces/item-interface';

const defaultValue = {
  items: [] as Item[],
  listItemByCategory(category: string) {},
  setItems([]: Item[]) {},
};
export const ItemContext = React.createContext(defaultValue);
