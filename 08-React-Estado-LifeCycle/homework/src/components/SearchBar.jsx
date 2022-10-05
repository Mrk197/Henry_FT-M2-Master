import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) =>{ //funcion para detectar cambio en el input
    e.preventDefault(); //parar acción default
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault(); //detener la ejecución que el evento normalmnte dispara
      onSearch(city);
      document.getElementById("search").value = "";
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        className='inputT'
        onChange={(e) => {handleInputChange(e)}}
        id="search"
      />
      <input type="submit" value="Agregar" className='inputBtn' />
    </form>
  );
}