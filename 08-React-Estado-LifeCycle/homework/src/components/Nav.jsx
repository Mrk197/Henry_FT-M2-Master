import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo"></img>
        <h2>Henry - Weather App</h2>
      </div>
      <div>
        <SearchBar onSearch={onSearch}></SearchBar>
      </div>
    </div>
  );
};

export default Nav;
