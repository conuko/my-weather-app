/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Container } from 'react-bootstrap';
import CitySelector from './components/CitySelector/CitySelector';
import './App.css';

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
};

export default App;
