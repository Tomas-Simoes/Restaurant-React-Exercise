// import Plate from "./Plate";
import { meal } from "../App";
import Meal from "./Meal";

const Days = ({
  name,
  meals,
  updatePrice,
}: {
  name: string;
  meals: meal[];
  updatePrice: (newAddPrice: number) => void;
}) => {
  const changePriceHandler = (price: number): void => {
    updatePrice(price);
  };

  return (
    <div>
      <h3>{name}</h3>

      <ul key={name}>
        {meals.map((meal) => {
          return (
            <div key={meal.idMeal}>
              <Meal meal={meal} changePrice={changePriceHandler} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Days;
