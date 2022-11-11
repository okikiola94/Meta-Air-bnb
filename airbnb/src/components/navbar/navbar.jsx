import React from 'react';

import 'animate.css';
// import { useContext } from 'react';
// import "../../style/home.css";
import { useState } from 'react';
import PopUp from '../popup/popup';
import "./navbar.css";


const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const activeRoute = props.activeRoute;
  return (
     <nav className="animate__animated animate__fadeIn" id="nav">
      <a href="/" className="brand-name">
        <img src={`${process.env.PUBLIC_URL}/assets/images/white--logo.png`}  alt="logo" />
      </a>
      
      <a href="/" className="brand-name2">
        <img src={`${process.env.PUBLIC_URL}/assets/images/blue-dark-logo.png`}  alt="logo" />
      </a>

      <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>       
           <hr className='line'/> 
           <hr className='line'/>
           <hr className='line'/>
           <hr className='line'/>

      </button>

      

      <div
        className="navigation-menu">
        <ul>
          <li>
            <a onClick={() => props.goToHome()} className={activeRoute === 'home' ? 'navigation-menu-active' :'navigation-menu-inactive'} href="/#home">Home</a>
          </li>
          <li>
            <a onClick={() => props.goToAbout()} className={activeRoute === 'about' ? 'navigation-menu-active' :'navigation-menu-inactive'} href="/#about">About</a>
          </li>
          <li>
            <a onClick={() => props.goToPortfolio()} className={activeRoute === 'experience' ? 'navigation-menu-active' :'navigation-menu-inactive'} href="/#experience">Portfolio</a>
          </li>
          <li>
            <a onClick={() => props.goToContact()} className={activeRoute === 'contact' ? 'navigation-menu-active' :'navigation-menu-inactive'} href="/#contact">Contact</a>
          </li>
        </ul>
      </div>

      {isNavExpanded && <PopUp exit={() => setIsNavExpanded(false)} activeRoute={activeRoute}
        goToHome={() => props.goToHome()} goToAbout={() => props.goToAbout()} goToPortfolio={() => props.goToPortfolio()} goToContact={() => props.goToContact()} />
      }
    </nav>)}



export default Navbar;




// import {
// Nav,
// NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './NavbarElements';

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
//     <div className="home-logo-description" id="logo_description">
//                 <div className="logo-image_container">
//                 <img src={`${process.env.PUBLIC_URL}/assets/images/meta-logo.png`}  id ="product__logo"  alt="Meta_logo"/>
//                 </div>
//                 <div className='Meta-label' id='meta-bnb_label'>
//                     <h1>Metabnb</h1>
//                 </div>
//             </div>

// 		<Bars />

// 		<NavMenu>
// 		<NavLink to='/about' activeStyle>
// 			Home
// 		</NavLink>
// 		<NavLink to='/events' activeStyle>
// 			Place to stay
// 		</NavLink>
// 		<NavLink to='/annual' activeStyle>
// 			NFTs
// 		</NavLink>
// 		<NavLink to='/team' activeStyle>
// 			Community
// 		</NavLink>
		
// 		<NavLink to='/sign-up' activeStyle>
// 			Connect wallet
// 		</NavLink>
// 		{/* Second Nav */}
// 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/signin'>Connect wallet</NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;
