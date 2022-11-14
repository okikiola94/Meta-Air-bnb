import React from 'react';
import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import "../../style/home.css";
import { useState } from 'react';
import PopUp from '../popup/popup';
import "./navbar.css";


const Navbar = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
     <nav className="navbar" id="nav">
      <div className="home-logo-description"id="logo_description">
            <div className="logo-image_container">
            <img src={`${process.env.PUBLIC_URL}/assets/images/Group.svg`}  id ="product__logo"  alt="Meta_logo"/>
             </div>
      </div>

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
          <div className="link-container">
          <Link to="/fullname" id="contact">Home</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/places" id="contact">Place to stay</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/fullname" id="contact">NFTs</Link>
          </div>
          </li>
          <li>
          <div className="link-container">
          <Link to="/fullname" id="contact">Community</Link>
          </div>
          </li>

        </ul>
        <div className="avatar">
            <div className="avatar-content">
           <button onClick={() => {
          setIsNavExpanded(!isNavExpanded);}}className="connect-wallet">Connect wallet</button> 
            </div>
          </div>
          </div>
          {isNavExpanded && <PopUp exit={() => setIsNavExpanded(false)} />
      }
      

    </nav>)}



export default Navbar;

