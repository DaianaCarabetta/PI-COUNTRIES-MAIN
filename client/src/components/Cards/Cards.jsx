import Card from '../Card/Card'
import style from './Cards.module.css';

const Cards = ({ countries }) => {
  return (
  <div className={style.container}>
    {countries.map((country) => (
      <Card country={country} key={country.name}/>
    ))}
  </div>
  )
}

export default Cards;
