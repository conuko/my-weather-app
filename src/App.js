/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import WeatherCard from './components/WeatherCard/WeatherCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <WeatherCard
        dt={1602104400 * 1000}
        tempMin="22.67"
        tempMax="24.39"
        main="Clear"
        icon="01d"
      />
    </div>
  );
};

export default App;
