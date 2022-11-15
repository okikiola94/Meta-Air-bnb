import React from "react";
import "./popup.css";
import Walletpopup from '../walletpopup/walletpopup';
import { Link } from "react-router-dom";




const PopUp = (props) => {
    return ( 
      <div className="popup-backdrop" onClick={props.exit} >
        <div className="popup-body">

        <div
        className="popup-navigation-menu">
        <ul>
          <li>
          <div className="link-container-popup">
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
           <Walletpopup/>
          </div>


        </div>
      </div>
      </div>
  
    )
  }
  
  export default PopUp;