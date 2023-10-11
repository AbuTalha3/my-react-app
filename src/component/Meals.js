import React from 'react';
import { useSelector } from 'react-redux';

function Meals() {
  const meals = useSelector((state) => state.meal.meals);
  const isLoading = useSelector((state) => state.meal.loading);
  const error = useSelector((state) => state.meal.error);
  if (isLoading) {
    return <p>Please wait...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h3>Meals Menu</h3>
      {meals.map(meal => (
        <div key={meal.idCategory}>
          <img src={meal.strCategoryThumb} alt="food" />
          <h2>{meal.strCategory}</h2>
        </div>
      ))}
    </div>
  );
}

export default Meals;
