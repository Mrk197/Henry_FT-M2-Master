import React from 'react';
import sSearchBar from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className={sSearchBar.SearchBar}>
    <input type="text" placeholder='Ciudad...' className={sSearchBar.inputT}></input>
    <input 
    type="submit" 
    value="Agregar" 
    onClick={() => onSearch("VALOR DEL INPUT")}
    className={sSearchBar.inputBtn}
    ></input>
  </div>
};