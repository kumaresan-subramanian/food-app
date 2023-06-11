

import mealsImg  from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { HeaderCart } from "./HeaderCart";
export const Header = (props) => {

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={props.onCartHandler}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="" />
      </div>
    </>
  )
}