import React from 'react';
import { Card } from 'react-bootstrap';
import classes from '../../styles/WeatherCard.module.css';

const WeatherCard = ({
  dt, tempMin, tempMax, main, icon,
}) => {
  // create date object
  const date = new Date(dt);
  return (
    <div className={classes.Card}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          <span style={{ fontSize: '1rem', fontWeight: '500' }}>
            {date.toLocaleTimeString()}
          </span>
          <br />
          {date.toLocaleDateString()}
        </p>
        {/* minimum temperature */}
        <p>
          Min:
          {' '}
          {Math.round(tempMin)}
        </p>
        {/* maximum temperature */}
        <p>
          Max:
          {' '}
          {Math.round(tempMax)}
        </p>
      </Card.Body>
    </div>
  );
};

export default WeatherCard;
