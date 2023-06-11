
import {DUMMY_MEALS} from "./dummy-meals";
import classes from './AvailableMeals.module.css';
import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";
export const AvailableMeals = (props) => {
  
  const mealsList = DUMMY_MEALS.map( item => <MealItem key={item.id} meal={item}></MealItem> )
  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>
            {mealsList}
          </ul>
        </Card>

      </section>
    </>
  )
}