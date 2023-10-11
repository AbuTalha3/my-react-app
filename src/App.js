import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Meals from './component/Meals';

function App() {
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
