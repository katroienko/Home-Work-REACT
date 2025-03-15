import CityCard from '../CityCard/CityCard';
import CitySelector from './CitySelector/CitySelector';
import './App.css'

import { useState } from 'react'


const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <CitySelector onSelectCity={handleSelectCity} />
      <CityCard city={selectedCity} />
    </div>
  );
};

export default App;

