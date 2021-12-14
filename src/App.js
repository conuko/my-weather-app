import React from 'react';
import { Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector/CitySelector';
import WeatherList from './components/WeatherList/WeatherList';
import UseFetch from './hooks/UseFetch';
import './App.css';

const App = () => {
  // destructure the returned values from UseFetch
  const {
    data, error, isLoading, setUrl,
  } = UseFetch();
  console.log(data);
  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
      {/* Conditional Rendering: if we have data from the API, render the WeatherList
      component and pass the prop named weathers to reach our API results */}
      {data && <WeatherList weathers={data.list} />}
    </Container>
  );
};

export default App;
