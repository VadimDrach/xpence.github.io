import React from 'react'

function Menu() {
  return (	
	<div className="header__menu menu">
		<button type="button" className="menu__icon icon-menu"><span></span></button>
		<nav className="menu__body">
			<ul className="menu__list">
					<li className="menu__item">
						<a href="/features" className="menu__link">Features</a>
				  </li>
				  
				  <li className="menu__item">
						<a href="/about us" className="menu__link">About us</a>
				  </li>
				  
				  <li className="menu__item">
						<a href="/pricing" className="menu__link">Pricing</a>
				  </li>
				  
				  <li className="menu__item">
						<a href="/feedback" className="menu__link">Feedback</a>
					</li>
			</ul>
		</nav>
	</div>
  )
}

export default Menu
