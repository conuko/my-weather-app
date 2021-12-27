import React from 'react';

const WeatherCard = ({
  dt, tempMin, tempMax, main, icon,
}) => {
  // create date object
  const date = new Date(dt);
  return (
    <div>
      <img
        variant="top"
        alt="card"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div>
        <div>{main}</div>
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
      </div>
    </div>
  );
};

export default WeatherCard;
