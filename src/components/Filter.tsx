import React, { useContext, useEffect, useState } from 'react';
import { Item } from '../interfaces/item-interface';
import { ItemContext } from '../store/item-context';
import classes from './Filter.module.css';

function Filter() {
  const itemContext = useContext(ItemContext);
  const [placeHolder, setPlaceHolder] = useState('');

  const handlePlaceHolder = () => {
    let resultString = '';
    for (let i = 0; i < 3; i++) {
      if (itemContext.items[i] && itemContext.items[i].name) {
        resultString += itemContext.items[i].name;
        if (i < 2) resultString += ', ';
        else resultString += '...';
      }
    }
    return resultString;
  };

  useEffect(() => {
    setPlaceHolder(handlePlaceHolder());
  }, [itemContext]);

  return (
    <div className={classes['filter-row']}>
      <input placeholder={placeHolder} className={classes.search}></input>
      <input
        placeholder='Categories'
        className='categories'
        type={'search'}
      ></input>
    </div>
  );
}

export default Filter;
