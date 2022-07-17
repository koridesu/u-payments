import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './UI/Button';

interface Props {}

function AddItem(props: Props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/createpage');
  };

  return <Button onClick={onClick}>+</Button>;
}

export default AddItem;
