<<<<<<< HEAD
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
=======
import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
>>>>>>> c2d834a (Header of Restaurant Website)

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
<<<<<<< HEAD
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
=======
      <span>Your Cart </span>
      <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCartButton
>>>>>>> c2d834a (Header of Restaurant Website)
