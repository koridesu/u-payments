import React, { useState } from 'react';
import { Item } from '../interfaces/item-interface';
import { DefaultProps } from '../interfaces/props-interface';
import { ItemContext } from './item-context';

function ItemContextProvider(props: DefaultProps) {
  const [itemsState, setItemsState] = useState<Item[]>([]);

  const listItemByCategory = (category: string) => {
    const desiredItems = itemsState.filter((item) => {
      return item.category === category;
    });

    return desiredItems;
  };

  const setItems = (items: Item[]) => {
    setItemsState(() => {
      return items;
    });
  };

  const itemContext = {
    items: itemsState,
    listItemByCategory,
    setItems,
  };

  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
}

export default ItemContextProvider;
