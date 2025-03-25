import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';

function Header() {
  return (
	  <header className='header'>
		  <Logo />

		  <Menu />

		  <Button />
	 </header>
  )
}

export default Header;
