import React from 'react';
import classes from './Header.module.css';
function Header() {
  return (
    <div className={classes.header}>
      <h1>U Payments Store</h1>
      <button>Register</button>
    </div>
  );
}

export default Header;
