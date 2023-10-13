import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MealInfo() {
  const { mealId } = useParams();
  const meals = useSelector((state) => state.meal.meals);
  const meal = meals.find((meal) => meal.id === mealId);
  if (!meal) {
    return <h3>Meal not found !</h3>;
  }

  return (
    <div>
      <img src={meal.strCategoryThumb} alt="food" />
    </div>
  );
}

export default MealInfo;
