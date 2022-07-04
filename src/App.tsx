import React, { useState } from "react";
import "./App.css";

import Days from "./components/Days";

//? Interfaces
export interface meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  price: number;
}
export interface day {
  name: string;
  meals: meal[];
}

//? Plates
const INITIAL_DAYS: day[] = [
  {
    name: "Monday",
    meals: [
      {
        strMeal: "Baked salmon with fennel & tomatoes",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1548772327.jpg",
        idMeal: "52959",
        price: 10,
      },
      {
        strMeal: "Cajun spiced fish tacos",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        idMeal: "52819",
        price: 10,
      },
      {
        strMeal: "Escovitch Fish",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        idMeal: "52944",
        price: 3,
      },
      {
        strMeal: "Fish fofos",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        idMeal: "53043",
        price: 12,
      },
      {
        strMeal: "Fish pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
        idMeal: "52802",
        price: 15,
      },
    ],
  },
  {
    name: "Tuesday",
    meals: [
      {
        strMeal: "Beef and Mustard Pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        idMeal: "52874",
        price: 5,
      },
      {
        strMeal: "Beef and Oyster pie",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
        idMeal: "52878",
        price: 5,
      },
      {
        strMeal:
          "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
        idMeal: "52997",
        price: 5,
      },
      {
        strMeal: "Beef Bourguignon",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg",
        idMeal: "52904",
        price: 2,
      },
      {
        strMeal: "Beef Brisket Pot Roast",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
        idMeal: "52812",
        price: 10,
      },
    ],
  },
  {
    name: "Wednesday",
    meals: [
      {
        strMeal: "Ayam Percik",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
        idMeal: "53050",
        price: 12,
      },
      {
        strMeal: "Brown Stew Chicken",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
        idMeal: "52940",
        price: 12,
      },
      {
        strMeal: "Chick-Fil-A Sandwich",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
        idMeal: "53016",
        price: 12,
      },
      {
        strMeal: "Chicken & mushroom Hotpot",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
        idMeal: "52846",
        price: 12,
      },
      {
        strMeal: "Chicken Alfredo Primavera",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
        idMeal: "52796",
        price: 200,
      },
    ],
  },
  {
    name: "Thursday",
    meals: [
      {
        strMeal: "Chilli prawn linguine",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg",
        idMeal: "52839",
        price: 13,
      },
      {
        strMeal: "Fettucine alfredo",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg",
        price: 140,
        idMeal: "52835",
      },
      {
        strMeal: "Grilled Mac and Cheese Sandwich",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
        idMeal: "52829",
        price: 25,
      },
      {
        strMeal: "Lasagna Sandwiches",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
        idMeal: "52987",
        price: 50,
      },
      {
        strMeal: "Lasagne",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
        idMeal: "52844",
        price: 10,
      },
    ],
  },
  {
    name: " Friday",
    meals: [
      {
        strMeal: "Roast fennel and aubergine paella",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/1520081754.jpg",
        idMeal: "52942",
        price: 1,
      },
      {
        strMeal: "Vegan Chocolate Cake",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
        idMeal: "52794",
        price: 12,
      },
      {
        strMeal: "Vegan Lasagna",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg",
        idMeal: "52775",
        price: 50,
      },
    ],
  },
];

function App() {
  const [price, setPrice] = useState(0);

  const updatePriceHandler = (newAddPrice: number): void => {
    setPrice((prevState) => (prevState += newAddPrice));
  };

  return (
    <div className="App">
      {INITIAL_DAYS.map((day: day) => {
        return (
          <Days
            key={day.name}
            name={day.name}
            meals={day.meals}
            updatePrice={updatePriceHandler}
          />
        );
      })}

      <p> Total price to pay: {price}</p>
    </div>
  );
}

export default App;
