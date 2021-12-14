import React, { useState } from 'react';
import {
  Row, Col, FormControl, Button,
} from 'react-bootstrap';

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(city);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h1>Search your city</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <FormControl
            placeholder="Enter city"
            // users input updates the value of city
            onChange={(e) => setCity(e.target.value)}
            // the value will be the currently selected city
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* The event handler to handle the button click */}
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
