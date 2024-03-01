import React from 'react';
import style from './CountryDetail.module.css';

export default function CountryDetail( { country } ) {
  const { countryCode, name, flagImage, continent, capital, subregion, population, area } = country;

  return (
    <div className={style.countryDetail}>
      <img src={flagImage} alt={name} className={style.detailImage} />
      <div className={style.detailContent}>
        <h2 className={style.detailTitle}>{name}</h2>
        <div className={style.body}>
          <h3>{countryCode}</h3>
          <p><strong>Continents:</strong> {continent}</p>
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Subregion:</strong> {subregion}</p>
          <p><strong>Population:</strong> {population}</p>
          <p><strong>Area:</strong> {area}</p>
        </div>
      </div>
    </div>
  );
}

