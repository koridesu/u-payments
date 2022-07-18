import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../../interfaces/item-interface';
import { ItemContext } from '../../store/item-context';
import classes from './ItemCard.module.css';

interface Props {
  item: Item;
  deleteById: (id: string) => void;
}

function ItemCard(props: Props) {
  const navigate = useNavigate();
  const itemContext = useContext(ItemContext);
  const onclick = () => {
    props.deleteById(props.item.id);
  };

  const navigateDescriptions = () => {
    itemContext.setSelectedItemId(props.item.id);
    localStorage.setItem('selectedItemId', props.item.id);
    navigate('/details');
  };

  return (
    <div className={classes['item-card']}>
      <button className={classes.close} onClick={onclick}>
        X
      </button>

      <div className={classes['img-container']} onClick={navigateDescriptions}>
        <img src={props.item.avatar} alt={props.item.avatar}></img>
      </div>
      <p>{props.item.name}</p>
      <p>${props.item.price}</p>
    </div>
  );
}

export default ItemCard;
