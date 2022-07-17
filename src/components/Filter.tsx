import React, { useContext, useEffect, useState } from 'react';
import { ItemContext } from '../store/item-context';
import classes from './Filter.module.css';

export interface FilterProps {
  handleNameFilter: (name?: string) => void;
  handleCategoryFilter: (category?: string) => void;
}

function Filter(props: FilterProps) {
  const itemContext = useContext(ItemContext);
  const [placeHolder, setPlaceHolder] = useState<string>('');
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState<string>('');

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

  const handleCategoryChange = (e: any) => {
    props.handleCategoryFilter(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.handleNameFilter(nameFilter);
  };

  useEffect(() => {
    setPlaceHolder(handlePlaceHolder());

    const categories = itemContext.items.map((item) => {
      return item.category;
    });

    setUniqueCategories(
      categories.filter((category, index) => {
        return categories.indexOf(category) === index;
      })
    );
  }, [itemContext]);

  return (
    <form className={classes['filter-row']} onSubmit={handleSubmit}>
      <input
        placeholder={placeHolder}
        className={classes.search}
        value={nameFilter}
        onChange={(e) => {
          setNameFilter(e.target.value);
        }}
      ></input>
      <button className={classes.button}>Filter</button>
      <select
        className={classes.search}
        placeholder='Categories'
        onChange={handleCategoryChange}
      >
        <option value={''}>None</option>
        {uniqueCategories.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </form>
  );
}

export default Filter;
