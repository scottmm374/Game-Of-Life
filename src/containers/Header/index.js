import React from 'react';
import gameOfLife from '../../assets/gameOfLife.png';

const Header = () => {
  return (
    <header className='header'>
      <img id='header-img' src={gameOfLife} alt='gameOfLife' />
    </header>
  );
};

export default Header;
