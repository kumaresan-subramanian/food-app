import classes from "./Cart.module.css";
import { Modal } from "../UI/Modal";
import { CartContext } from "../../store/cart-context";
import { useContext } from "react";
import { CartItem } from "./CartItem";
export const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const showOrderButton = cartCtx.items.length > 0;
  const addToCartHandler = (item) => {
    cartCtx.addItem(item);
  }

  const removeFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  }
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => ( 
        <CartItem 
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCartHandler.bind(null, item)}
          onRemove={removeFromCartHandler.bind(null, item.id)}
          ></CartItem>
      ))}
    </ul>
  )


  return (
    <Modal  onCartHandler={props.onCartHandler}>
      {cartItems}
      <div className={classes.total}>
         <span>Total Amount</span>
         <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']}
            onClick={props.onCartHandler}>Close</button>
          {showOrderButton && <button className={classes.button}
            onClick={props.onCartHandler}>Order</button>}
      </div>
    </Modal>
  )
}