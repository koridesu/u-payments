import React from 'react';
import { DefaultButtonProps } from '../../interfaces/props-interface';

import classes from './Button.module.css';

function Button(props: DefaultButtonProps) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
