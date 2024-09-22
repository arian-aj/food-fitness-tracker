import './App.css';
import { FitFoodContext } from './FitFoodContext';
import { Routes, Route } from 'react-router-dom';
import Layout from './views/Layout';
import HomePage from './pages/HomePage';
import WeekPlan from './pages/WeekPlan.jsx';
import { useEffect, useState } from 'react';
import SearchPage from './pages/SearchPage.jsx';
import NotFound from './pages/NotFound.jsx';
import NutrientsPage from './pages/NutrientsPage.jsx';


function App() {
  
  const [chosenFoodNutrients, setChosenFoodNutrients] = useState(null)
  
  
  useEffect(() => {

  }, [])

  return (
    <FitFoodContext.Provider value={{chosenFoodNutrients, setChosenFoodNutrients}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="weekplan" element={<WeekPlan />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="nutrients" element={<NutrientsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </FitFoodContext.Provider>
  );
}

export default App;
