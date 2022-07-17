import React from 'react';
import { Item } from '../../interfaces/item-interface';
import classes from './ItemCard.module.css';

interface Props {
  item: Item;
}

function ItemCard(props: Props) {
  return (
    <div className={classes['item-card']}>
      <div className={classes['img-container']}>
        <img src={props.item.avatar} alt={props.item.avatar}></img>
      </div>
      <p className='item-name'>{props.item.name}</p>
      <p className='item-price'>${props.item.price}</p>
    </div>
  );
}

export default ItemCard;
