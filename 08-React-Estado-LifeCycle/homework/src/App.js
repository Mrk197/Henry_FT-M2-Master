import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';

export default function App() {
  const [setCities] = useState([]);
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards/>
    </div>
  );

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione

    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    setCities(oldCities => [...oldCities, ciudadEjemplo]);
  }

}
