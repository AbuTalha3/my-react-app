import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMeals } from './Redux/meal';
import Navbar from './component/Navbar';
import Meals from './component/Meals';

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

      </Routes>
    </div>
  );
}

export default App;
