import React from 'react';
import {
  CardWrapper, Image, CardBody, Main, DateAndTime, Min, Max,
} from './WeatherCard.styles';

const WeatherCard = ({
  dt, tempMin, tempMax, main, icon,
}) => {
  // create date object
  const date = new Date(dt);
  return (
    <CardWrapper>
      <Image
        variant="top"
        alt="card"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <CardBody>
        <Main>{main}</Main>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <DateAndTime>
          {date.toLocaleDateString()}
          <br />
          <span>
            {date.toLocaleTimeString()}
          </span>
        </DateAndTime>
        {/* minimum temperature */}
        <Min>
          Min:
          {' '}
          {Math.round(tempMin)}
        </Min>
        {/* maximum temperature */}
        <Max>
          Max:
          {' '}
          {Math.round(tempMax)}
        </Max>
      </CardBody>
    </CardWrapper>
  );
};

export default WeatherCard;
