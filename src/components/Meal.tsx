import React from "react";
import { meal, checkedMeals } from "../App";

import "../style/Meals/Meal.css";

const Meal = ({
  meal,
  changePrice,
}: {
  meal: meal;
  changePrice: (price: number) => void;
}) => {
  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      checkedMeals.push(e.target.id);
      changePrice(+e.target.value);
    } else {
      checkedMeals = checkedMeals.filter(
        (meal: string) => meal !== e.target.id
      );
      changePrice(+e.target.value * -1);
    }

    console.log(checkedMeals);
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <td>
            <img src={meal.strMealThumb} className="img" alt={meal.strMeal} />
          </td>
          <td>{meal.strMeal}</td>
          <td>
            <input
              type="checkBox"
              id={meal.idMeal}
              value={meal.price}
              onChange={checkBoxHandler}
              checked={checkedMeals.includes(meal.idMeal)}
            ></input>
            <label> {meal.price}$ </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Meal;
