import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMeals } from './Redux/meal';
import Navbar from './component/Navbar';
import Meals from './component/Meals';
import MealInfo from './component/MealInfo';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/meals/:mealId" element={<MealInfo />} />
      </Routes>
    </div>
  );
}

export default App;
