import React, { useState } from 'react';
import './style.css';
import mapImage from './img/map.svg';

const JourneyPicker = () => {
  const [fromCity, setFromCity] = useState(' ');
  const [toCity, setToCity] = useState(' ');
  const [date, setDate] = useState(' ');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
  };

  return (
    <div class="journey-picker container">
      <h2 class="journey-picker__head">Kam chcete jet?</h2>
      <div class="journey-picker__body">
        <form class="journey-picker__form">
          <label>
            <div class="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(event) => setFromCity(event.target.value)}
            >
              <option value="">Vyberte</option>
              <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option>
            </select>
          </label>
          <label>
            <div class="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(event) => setToCity(event.target.value)}
            >
              <option value="">Vyberte</option>
              <option value="Mesto1">Město 1</option>
              <option value="Mesto2">Město 2</option>
              <option value="Mesto3">Město 3</option>
              <option value="Mesto4">Město 4</option>
            </select>
          </label>
          <label>
            <div class="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(event) => setDate(event.target.value)}
            >
              <option value="">Vyberte</option>
              <option>20.05.2021</option>
              <option>21.05.2021</option>
              <option>22.05.2021</option>
              <option>23.05.2021</option>
            </select>
          </label>
          <div class="journey-picker__controls">
            <button class="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img class="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};

export default JourneyPicker;
