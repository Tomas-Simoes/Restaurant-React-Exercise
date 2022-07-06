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

  if (meals.length === 0) {
    return (
      <div>
        <h3>{name}</h3>
        <p>
          There are no meals available for this day, according to your search
        </p>
      </div>
    );
  }

  return (
    <div>
      <h3>{name}</h3>

      {meals.map((meal) => {
        return (
          <div key={meal.idMeal}>
            <Meal meal={meal} changePrice={changePriceHandler} />
          </div>
        );
      })}
    </div>
  );
};

export default Days;
