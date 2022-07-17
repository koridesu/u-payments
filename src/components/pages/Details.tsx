import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Item } from '../../interfaces/item-interface';
import { ItemContext } from '../../store/item-context';
import classes from './Details.module.css';

function Details() {
  const context = useContext(ItemContext);
  const [item, setItem] = useState<Item>();

  useEffect(() => {
    getDetailsFromApi();
  }, []);

  const getDetailsFromApi = async () => {
    const id = context.selectedItemId
      ? context.selectedItemId
      : localStorage.getItem('selectedItemId');

    const result = await axios.get(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    );

    setItem(result.data);
  };

  return (
    <div className={classes.container}>
      <h1>{item?.name}</h1>
      <div className={classes['img-container']}>
        <img
          className={classes.image}
          src={item?.avatar}
          alt='detail-img'
        ></img>

        <h2 className={classes.price}>$ {item?.price}</h2>
      </div>
      <div className={classes.break}></div>
      <div className={classes['description-container']}>
        <h3>Description</h3>
        <p className={classes.paragraph}>{item?.description}</p>
      </div>
    </div>
  );
}

export default Details;
