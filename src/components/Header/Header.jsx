import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';

import './header.scss';


function Header() {
  return (
	  <header className='header'>
		  <div className='container'>
				<Logo />

				<Menu />

				<Button />
		  </div>
		  
	 </header>
  )
}

export default Header;
