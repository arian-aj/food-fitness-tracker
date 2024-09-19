import './App.css'
import { FitFoodContext } from './FitFoodContext.js'
import { Routes, Route } from 'react-router-dom'
import Layout from './views/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
function App() {

  return (
    <FitFoodContext.Provider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
        </Route>
      </Routes>
    </FitFoodContext.Provider>
  );
}

export default App;