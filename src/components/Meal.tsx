import React from "react";
import { meal } from "../App";

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
    <div>
      <label> {meal.strMeal} </label>
      <input
        type="checkBox"
        value={meal.price}
        onChange={checkBoxHandler}
      ></input>
      <label> {meal.price}$ </label>
    </div>
  );
};

export default Meal;
