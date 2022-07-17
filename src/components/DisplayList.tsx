import React, { useContext, useEffect } from 'react';
import { ItemContext } from '../store/item-context';
import ItemCard from './UI/ItemCard';
import classes from './DisplayList.module.css';
import axios from 'axios';

function DisplayList() {
  const itemContext = useContext(ItemContext);

  const getItemsFromApi = async () => {
    const result = await axios.get(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/'
    );

    itemContext.setItems(result.data);
  };
  useEffect(() => {
    getItemsFromApi();
  }, []);

  return (
    <ul className={classes['item-list']}>
      {itemContext.items.map((item, index) => {
        return (
          <li key={index} style={{ listStyle: 'none' }}>
            <ItemCard item={item}></ItemCard>
          </li>
        );
      })}
    </ul>
  );
}

export default DisplayList;
