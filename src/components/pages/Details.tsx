import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Item } from '../../interfaces/item-interface';
import { ItemContext } from '../../store/item-context';
import classes from './Details.module.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Details() {
  const context = useContext(ItemContext);
  const [item, setItem] = useState<Item>();
  const navigate = useNavigate();
  useEffect(() => {
    getDetailsFromApi();
  }, []);

  const getDetailsFromApi = async () => {
    const id = context.selectedItemId
      ? context.selectedItemId
      : localStorage.getItem('selectedItemId');

    const result = await axios
      .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
      .catch((err) => {
        toast.error(err.message);
        throw err;
      });

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
      <button className={classes.back} onClick={() => navigate('/')}>
        Back
      </button>
    </div>
  );
}

export default Details;
