import axios from 'axios';
import React from 'react';
import { Item } from '../../interfaces/item-interface';
import classes from './ItemCard.module.css';

interface Props {
  item: Item;
  deleteById: (id: string) => void;
}

function ItemCard(props: Props) {
  const onclick = () => {
    props.deleteById(props.item.id);
  };

  return (
    <div className={classes['item-card']}>
      <button className={classes.close} onClick={onclick}>
        X
      </button>

      <div className={classes['img-container']}>
        <img src={props.item.avatar} alt={props.item.avatar}></img>
      </div>
      <p>{props.item.name}</p>
      <p>${props.item.price}</p>
    </div>
  );
}

export default ItemCard;
