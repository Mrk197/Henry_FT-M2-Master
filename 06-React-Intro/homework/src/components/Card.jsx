import React from 'react';

export default function Card(props) {
  // acá va tu código
  //destructuring de props
  const { max, min, name, img, onClose } = props;

  const MaxComponent = <div>
    <p>Max</p>
    <p>{max}</p>
  </div>

  const MinComponent = <div>
    <p>Min</p>
    <p>{min}</p>
  </div>


  return <div>
    <button onClick={onClose}>x</button>
    <h4>{name}</h4>
    <div>
      <div>
        {MinComponent}
        {MaxComponent}
      </div>
      <div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
      </div>
    </div>
  </div>
};