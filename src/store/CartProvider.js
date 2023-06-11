import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) =>{

  switch(action.type){

    case 'ADD': {
      let updatedItem;
      let updatedItems;
      const findIndex = state.items.findIndex(item => item.id == action.item.id);
      if(findIndex >= 0){
        const updateExItem = state.items[findIndex];
        updatedItem = {
          ...updateExItem,
          amount : updateExItem.amount + action.item.amount
        }
        updatedItems = state.items;
        updatedItems[findIndex] = updatedItem
      }else{
        updatedItems = state.items.concat(action.item);
      }
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    case 'REMOVE':{
      const fineEle = state.items.find
    }
    default:
      return defaultCartState
  }
} 
export const CartProvider = (props) =>{

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  }

  const cartValue = {
    items : cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  )
}