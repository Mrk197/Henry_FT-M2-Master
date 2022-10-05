import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className='NavCSS'>
      <div className='Logo'>
        <img src={Logo} alt="logo" id='LogoHenry'/>
        <h3>Henry - Weather App</h3>
      </div>
      <SearchBar onSearch={onSearch}></SearchBar>
    </div>
  );
};

export default Nav;
