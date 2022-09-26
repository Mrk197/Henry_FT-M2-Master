import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" name='ciudad...'></input>
    <input type="submit" value="Agregar" onClick={props.onSearch}></input>
  </div>
};