import React from 'react';
import gameOfLife from '../../assets/gameOfLife.png';

const Header = () => {
  return (
    <div className='header'>
      <header className='justify-content-center'>
        <img id='header-img' src={gameOfLife} alt='gameOfLife' />
      </header>
    </div>
  );
};

export default Header;
