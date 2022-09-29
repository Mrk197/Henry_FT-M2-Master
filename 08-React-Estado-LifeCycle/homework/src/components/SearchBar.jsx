import React, { useState } from "react";
import sSearchBar from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [setCity] = useState(onSearch);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input type="text" placeholder='Ciudad...' className={sSearchBar.inputT}></input>
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
