import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const {cities} = props;

//integrando map() en JSX -->> {}
  return <div>
    {cities.map(
      (city, i) => <Card
        max={city.main.temp_max}
        min={city.main.temp_min}
        name={city.name}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
        key={i}
      />
    )}
  </div>
};