import React, { useState } from 'react';
import { Item, ItemContextType } from '../interfaces/item-interface';
import { DefaultProps } from '../interfaces/props-interface';
import { ItemContext } from './item-context';

function ItemContextProvider(props: DefaultProps) {
  const [itemsState, setItemsState] = useState<Item[]>([]);
  const [selectedItemState, setSelectedItemState] = useState<string>();

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

  const setSelectedItemId = (id: string) => {
    setSelectedItemState(id);
  };

  const itemContext: ItemContextType = {
    selectedItemId: selectedItemState,
    items: itemsState,
    listItemByCategory,
    setItems,
    setSelectedItemId,
  };

  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
}

export default ItemContextProvider;
