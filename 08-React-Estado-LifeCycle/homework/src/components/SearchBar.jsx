import React, { useState } from "react";
import sSearchBar from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(onSearch);

  const handleInputChange = (e) =>{
    e.preventDefault();
    setCity(e.target.value);
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault(); //detiene comportamiento habitual 
      onSearch("Cairns"); //y hace onSearch
    }}>
      <input 
        type="text" 
        placeholder='Ciudad...' 
        className={sSearchBar.inputT} 
        onChange={(e)=>handleInputChange(e)}
      ></input>
      <input 
      type="submit" 
      value="Agregar" 
      className={sSearchBar.inputBtn}
      onChange= {setCity()}
      onClick={() => onSearch("Cairns")}
      ></input>
    </form>
  );
}
