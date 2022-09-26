import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div>
    <input type="text" name='ciudad...'></input>
    <input type="submit" value="Agregar" onClick={() => onSearch("VALOR DEL INPUT")}></input>
  </div>
};