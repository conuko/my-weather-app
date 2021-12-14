import React from 'react';
import { Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector/CitySelector';
import WeatherList from './components/WeatherList/WeatherList';
import UseFetch from './hooks/UseFetch';
import { API_KEY, API_BASE_URL } from './apis/config';
import './App.css';

const App = () => {
  // destructure the returned values from UseFetch
  const {
    data, error, isLoading, setUrl,
  } = UseFetch();

  // error handling and loading
  const getContent = () => {
    if (error) {
      return (
        <h2>
          Error when fetching:
          {' '}
          {error}
        </h2>
      );
    }
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    console.log(data);
    return <WeatherList weathers={data.list} />;
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}&units=metric`)} />
      {getContent()}
    </Container>
  );
};

export default App;
