import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../interfaces/category-interface';
import { Item } from '../../interfaces/item-interface';
import classes from './CreateForm.module.css';

function CreateForm() {
  const initialState: Item = {
    avatar: '',
    name: '',
    category: '',
    description: '',
    developerEmail: ',',
    price: 0,
    id: '',
  };
  const navigate = useNavigate();
  const [item, setItem] = useState<Item>(initialState);
  const [categoryState, setCategoryState] = useState<string[]>([]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    postItemToApi();
  };

  const postItemToApi = async () => {
    await axios.post(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/products',
      item
    );
    navigate('/homepage');
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const result = await axios.get(
      'https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/'
    );

    const categories = result.data as Category[];

    setCategoryState(
      categories.map((category) => {
        return category.name;
      })
    );
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
          {categoryState?.map((category, index) => {
            return (
              <option
                key={index}
                onChange={(e: any) => {
                  setItem((prev) => {
                    return { ...prev, category: e.target.value };
                  });
                }}
              >
                {category}
              </option>
            );
          })}
        </select>
        <input
          className={classes.price}
          type={'number'}
          placeholder={'Price'}
          value={item?.price}
          onChange={(e) => {
            setItem((prev) => {
              return {
                ...prev,
                price: parseInt(e.target.value),
              };
            });
          }}
        ></input>

        <button className={classes.submit}>SUBMIT</button>
        <button className={classes.back} onClick={() => navigate('/homepage')}>
          Back
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
