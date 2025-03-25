import React from 'react';
import Logo_img from '../../img/Header/Logo.png';

function Logo() {
  return (
	 <div>
			<a href="/home" className="logo__link">
				<img src={Logo_img} alt='Logo' className='logo__image' />
			</a>
	 </div>
  )
}

export default Logo;
