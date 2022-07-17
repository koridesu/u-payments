import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../../interfaces/item-interface';
import classes from './CreateForm.module.css';

function CreateForm() {
  const navigate = useNavigate();
  const [item, setItem] = useState<Item>({
    avatar: 'dummy',
    name: 'dummy',
    category: '',
    description: '',
    developerEmail: ',',
    price: 9,
    id: '',
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    postItemToApi();
  };

  const postItemToApi = async () => {
    const result = await axios.post(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products',
      item
    );

    navigate('/homepage');
  };

  return (
    <div className={classes.container}>
      <h1>Create Product</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes['product-name']}
          placeholder='Product Name'
          id='name'
          value={item?.name}
          onChange={(e) => {
            setItem((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        ></input>
        <textarea
          className={classes['description']}
          placeholder='Description'
          value={item?.description}
          onChange={(e) => {
            setItem((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
        ></textarea>
        <input
          className={classes['image']}
          placeholder='Image Url'
          value={item?.avatar}
          onChange={(e) => {
            setItem((prev) => {
              return { ...prev, avatar: e.target.value };
            });
          }}
        ></input>
        <select placeholder='Categories' className={classes.categories}>
          <option>catero</option>
        </select>
        <input
          type={'number'}
          placeholder={'Price'}
          value={item?.price}
          onChange={(e) => {
            setItem((prev) => {
              return { ...prev, price: parseInt(e.target.value) };
            });
          }}
        ></input>

        <button className={classes.submit}>SUBMIT</button>
      </form>
    </div>
  );
}

export default CreateForm;
