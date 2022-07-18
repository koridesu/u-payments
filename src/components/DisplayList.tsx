import React, { Fragment, useContext, useEffect, useState } from 'react';
import { ItemContext } from '../store/item-context';
import ItemCard from './UI/ItemCard';
import classes from './DisplayList.module.css';
import axios from 'axios';
import { FilterInterface } from '../interfaces/item-interface';
import Filter from './Filter';
import toast from 'react-hot-toast';

function DisplayList() {
  const itemContext = useContext(ItemContext);

  const [filter, setFilter] = useState<FilterInterface>();

  useEffect(() => {
    getItemsFromApi();
  }, []);

  const getItemsFromApi = async () => {
    const result = await axios
      .get(process.env.REACT_APP_GET_PRODUCTS ?? '')
      .catch((err) => {
        toast.error(err.message);
        throw err;
      });

    itemContext.setItems(result.data);
  };

  const deleteItemById = async (id: string) => {
    await axios
      .delete(
        `${process.env.REACT_APP_BASE_URL}/products/${id}`
        // `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
      )
      .catch((err) => {
        toast.error(err);

        throw err;
      });

    itemContext.setItems(
      itemContext.items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const handleCategoryFilter = (category?: string) => {
    setFilter({ ...filter, categoryFilter: category });
  };

  const handleNameFilter = (name?: string) => {
    setFilter({ ...filter, nameFilter: name });
  };

  return (
    <Fragment>
      <Filter
        handleCategoryFilter={handleCategoryFilter}
        handleNameFilter={handleNameFilter}
      ></Filter>
      <ul className={classes['item-list']}>
        {itemContext.items.map((item, index) => {
          if (
            !filter?.categoryFilter ||
            item.category === filter.categoryFilter
          )
            if (!filter?.nameFilter || item.name === filter.nameFilter)
              return (
                <li key={index} style={{ listStyle: 'none' }}>
                  <ItemCard item={item} deleteById={deleteItemById}></ItemCard>
                </li>
              );

          return null;
        })}
      </ul>
    </Fragment>
  );
}

export default DisplayList;
