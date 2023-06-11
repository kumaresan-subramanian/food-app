
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";
import { useRef } from "react";
export const MealItemForm = (props) =>{

  let amountIsValid = true;
  const submitHandler = (event) => {
    event.preventDefault();
    let enteredAmount = +amtInputRef.current.value;
    if(enteredAmount < 1 || enteredAmount > 5){
      amountIsValid = false;
      return;
    }
    props.onAddToCartHandler(enteredAmount);

  }

  const amtInputRef = useRef(null);
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" 
      ref={amtInputRef}
      input={{
        type:'number',
        id:'amount_'+ props.id,
        min:'1',
        max:'5',
        step:'1',
        defaultValue: '1',
      }}/>
      <button> + Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}