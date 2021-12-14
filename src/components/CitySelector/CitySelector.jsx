import React, { useState } from 'react';
import {
  Row, Col, FormControl, Button,
} from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from '../../apis/config';

const CitySelector = () => {
  const [city, setCity] = useState('');
  const [results, setResults] = useState(null);

  async function onSearch() {
    const response = await fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const result = await response.json();
    console.log(result);
    setResults(result);
    console.log(results);
    return result;
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
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
        <Col xs={4} className="text-center">
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
          <Button onClick={onSearch}>Check Weather</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
