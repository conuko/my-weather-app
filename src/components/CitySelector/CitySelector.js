import React, { useState } from 'react';
import { H2 } from '../_base/text/Text';

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(city);
    }
  };

  return (
    <>
      <div>
        <div>
          <H2>Search your city</H2>
        </div>
      </div>

      <div>
        <div>
          <form>
            <input
              placeholder="Enter city"
              // users input updates the value of city
              onChange={(e) => setCity(e.target.value)}
              // the value will be the currently selected city
              value={city}
              onKeyDown={onKeyDown}
            />
          </form>
        </div>
      </div>

      <div>
        <div>
          {/* The event handler to handle the button click */}
          <button type="button" onClick={() => onSearch(city)}>Check Weather</button>
        </div>
      </div>
    </>
  );
};

export default CitySelector;
