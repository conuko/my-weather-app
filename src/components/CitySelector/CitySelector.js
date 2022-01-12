import React, { useState } from 'react'
import { H2 } from '../_base/text/Text'
import {
  CheckWeatherButton,
  CheckWeatherInput,
  WeatherImg,
  Container,
} from './CitySelector.styles'
import weatherimg from '../../assets/images/surr-weather-forecast.png'

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState('')

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(city)
    }
  }

  return (
    <>
      <Container>
        <WeatherImg src={weatherimg} alt="weatherlogo" />
        <div>
          <H2>Weather Report.</H2>
        </div>
        <div>
          <form>
            <CheckWeatherInput
              placeholder="Enter city"
              // users input updates the value of city
              onChange={(e) => setCity(e.target.value)}
              // the value will be the currently selected city
              value={city}
              onKeyDown={onKeyDown}
            />
          </form>
        </div>
        <div>
          {/* The event handler to handle the button click */}
          <CheckWeatherButton type="button" onClick={() => onSearch(city)}>
            Check Weather
          </CheckWeatherButton>
        </div>
      </Container>
    </>
  )
}

export default CitySelector
