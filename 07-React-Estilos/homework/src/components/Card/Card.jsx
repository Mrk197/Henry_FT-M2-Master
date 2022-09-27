import React from 'react';
import styleCard from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  //destructuring de props
  const { max, min, name, img, onClose } = props;

  const MaxComponent = <div>
    <h6>Max</h6>
    <p>{max}°</p>
  </div>

  const MinComponent = <div>
    <h6>Max</h6>
    <p>{min}°</p>
  </div>


  return <div className={styleCard.Card}>
    <button onClick={onClose} className={styleCard.btnX}><p>x</p></button>
    <h4>{name}</h4>
    <div className={styleCard.cardTemperature}>
      <div className={styleCard.cardMaxMin}>
        {MinComponent}
        {MaxComponent}
      </div>
      <div className={styleCard.cardIMG}>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
      </div>
    </div>
  </div>
};