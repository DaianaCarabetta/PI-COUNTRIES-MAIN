import React from 'react';
import style from './CountryDetail.module.css';

export default function CountryDetail( { country } ) {
  const { countryCode, name, flagImage, continent, capital, subregion, population, area, Activities } = country;

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

          { Activities.length > 0 ? (
          <div>
            <p><strong>Activities:</strong></p>
            <ul>
              {Activities.map((activity) => (
                <li key={activity.id}>
                  {activity.name}
                  {/* <p><strong>Name: </strong>{activity.name}</p>
                  <p><strong>Duration: </strong>{activity.duration}</p>
                  <p><strong>Season: </strong>{activity.season}</p>
                  <p><strong>Difficulty: </strong>{activity.difficulty}</p> */}
                </li>
              ))}
            </ul>
          </div>) : (<></>) }
        </div>
      </div>
    </div>
  );
}

