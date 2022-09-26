import React from 'react';

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


  return <div className='Card'>
    <button onClick={onClose} className="cardX">x</button>
    <h4>{name}</h4>
    <div className='cardTemperature'>
      <div className='cardMaxMin'>
        {MinComponent}
        {MaxComponent}
      </div>
      <div className='cardIMG'>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
      </div>
    </div>
  </div>
};