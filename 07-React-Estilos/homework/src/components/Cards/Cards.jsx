import React from 'react';
import Card from '../Card/Card.jsx';
import styleCards from './Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map

//integrando map() en JSX -->> {}
  return <div className={styleCards.Cards}>
    {cities.map(
      (city) => <Card
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
        key={city.id}
      />
    )}
  </div>
};