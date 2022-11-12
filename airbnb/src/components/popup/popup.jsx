import React from "react";
import "./popup.css";



const PopUp = (props) => {
    return ( 
      <div className="popup-backdrop" onClick={props.exit} >
        <div className="popup-body">
          <ul>
          
          <li> <a onClick={() => props.goToContact()} className={props.activeRoute === 'contact' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="mailto:youremail@domain.com?subject=sharing link\n&body=I am sharing a link: https://google.com"><img src={`${process.env.PUBLIC_URL}/assets/images/mail-icon.png`} alt="mail-img" />Share as Email </a>
            </li>

            <li>
              <a onClick={() => props.goToHome()} className={props.activeRoute === 'home' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&quot%3B%20class=&quot%3Btwitter-share-button=&quot%3B%20data-show-count=&quot%3Bfalse=&quot=&url="><img src={`${process.env.PUBLIC_URL}/assets/images/twitter-icon.png`} alt="twitter-img" />Share on Twitter  </a>
            </li>
            <li>
              <a onClick={() => props.goToAbout()} className={props.activeRoute === 'about' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="https://faq.whatsapp.com/425247423114725/?helpref=uf_share"><img src={`${process.env.PUBLIC_URL}/assets/images/whatsapp-icon.png`} alt="whatsapp-img" />Share on Whatsapp </a>
            </li>
            <li>
              <a onClick={() => props.goToPortfolio()} className={props.activeRoute === 'experience' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="http://www.facebook.com/share.php?okikiola-frontend.netlify.app"><img src={`${process.env.PUBLIC_URL}/assets/images/facebook-icon.png`} alt="facebook-img" />Share on Facebook </a>
            </li>
            <li>
              <a onClick={() => props.goToContact()} className={props.activeRoute === 'contact' ? 'navigation-menu-active' : 'navigation-menu-inactive'} href="www.instagram.com"><img src={`${process.env.PUBLIC_URL}/assets/images/instagram-icon.png`} alt="instagram-img" />Share on Instagram </a></li>

            
          </ul>
        </div>
      </div>
  
    )
  }
  
  export default PopUp;