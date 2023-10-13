import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';

function MealInfo() {
  // Get the mealId from the route parameters
  const { mealId } = useParams();

  const meal = useSelector((state) => state.meal.meals.find((meal) => meal.idCategory === mealId));

  if (!meal) {
    return <p>Meal not found.</p>;
  }

  return (
    <>
      <Navigation />
      <div className="mealDetails">
        <h2>{meal.strCategory}</h2>
        <img src={meal.strCategoryThumb} alt="" />
        <p>{meal.strCategoryDescription}</p>
      </div>
    </>
  );
}

export default MealInfo;
