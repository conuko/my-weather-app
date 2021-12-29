/* eslint-disable arrow-body-style */
import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import { Wrapper } from './WeatherList.styles';

const WeatherList = ({ weathers }) => {
  return (
    <Wrapper>
      {weathers.map(({ dt, main, weather }) => (
        <div key={dt}>
          <WeatherCard
            tempMax={main.temp_max}
            tempMin={main.temp_min}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          />
        </div>
      ))}
    </Wrapper>
  );
};

export default WeatherList;
