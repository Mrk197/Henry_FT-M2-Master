import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards'

export default function App() {
  //se crea estado para el listado de ciudades
  const [cities, setCities] = useState([]);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  //funcion para agregar nuevas ciudades al estado cities
  function onSearch(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(resolve => resolve.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]); //se anexa nueva ciudad al listado existente
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id)); //devuelve nuevo arreglo con todos los elementos con id diferente al enviado
  }


  return (
    <div className="App">
      { /* se pasa función a Nav */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}>
      </Cards>
    </div>
  );
}
