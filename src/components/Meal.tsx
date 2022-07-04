import React from "react";
import { meal } from "../App";

import "./Meal.css";

const Meal = ({
  meal,
  changePrice,
}: {
  meal: meal;
  changePrice: (price: number) => void;
}) => {
  const checkBoxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? changePrice(+e.target.value)
      : changePrice(+e.target.value * -1);
  };

  return (
    <table className="table">
      <tr>
        <td>
          <img src={meal.strMealThumb} className="img" alt={meal.strMeal} />
        </td>
        <td>{meal.strMeal}</td>
        <td>
          <input
            type="checkBox"
            value={meal.price}
            onChange={checkBoxHandler}
          ></input>
          <label> {meal.price}$ </label>
        </td>
      </tr>
    </table>
  );
};

export default Meal;
