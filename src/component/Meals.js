import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import meal from '../Redux/meal';

function Meals() {
  const meals = useSelector((state) => state.meal.meals);
  const isLoading = useSelector((state) => state.meal.loading);
  const error = useSelector((state) => state.meal.error);
  const [search, setSearch] = useState('');
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  if (isLoading) {
    return <p>Please wait...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="mainContainer">
      <h3>Meals Menu</h3>
      <div className="searchBar">
        <input type="text" value={search} onChange={handleSearch} placeholder="Search Category" />
      </div>
      <div className="detailMeals">
        {meals
          .filter((meal) => meal.strCategory.toLowerCase().includes(search.toLowerCase()))
          .map((meal) => (
            <div key={meal.idCategory} className="cardContainer">
              <Link to={`/meals/${meal.idCategory}`}>
                <div className="mealsContainer" key={meal.idCategory}>
                  <img src={meal.strCategoryThumb} alt="food" />
                  <h2>{meal.strCategory}</h2>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Meals;
