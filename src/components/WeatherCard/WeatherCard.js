import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({
  dt, tempMin, tempMax, main, icon,
}) => {
  // create date object
  const date = new Date(dt);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        // get source from openweathermap url and pass icon prop to get correct icon
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/* convert date and time to local format */}
        <p>
          {date.toLocaleDateString()}
          {' '}
          -
          {' '}
          {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>
          Min:
          {' '}
          {tempMin}
          °
        </p>
        {/* maximum temperature */}
        <p>
          Max:
          {' '}
          {tempMax}
          °
        </p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
