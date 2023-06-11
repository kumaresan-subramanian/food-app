

import classes from "./HeaderCart.module.css";
import { CartIcon } from "../Cart/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
export const HeaderCart = (props) => {

  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0)
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
      </button>
    </>
  )
}