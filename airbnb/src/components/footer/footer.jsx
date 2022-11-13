import "./footer.css";

const Footer =()=>{
    return(
        <div className="footer-container_wrapper">

            <div className="footer-logo-column-wrapper">
                <div className="footer-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/Group-meta.svg`}  id ="Metabnb-white_icon"  alt="Metabnb_icon"/>

                </div>

                <div className="footer-social-links">
                    <a href="#fullcolumn" id="facebook-link">                <img src={`${process.env.PUBLIC_URL}/assets/images/facebook.svg`}  id ="facebook_icon"  alt="facebook_icon"/>
</a>

<a href="#fullcolumn" id="instagram-link">                <img src={`${process.env.PUBLIC_URL}/assets/images/instagram-icon.svg`}  id ="instagram_icon"  alt="instagram_icon"/>
</a>

<a href="#fullcolumn" id="twitter-link">                <img src={`${process.env.PUBLIC_URL}/assets/images/twitter-icon.svg`}  id ="twitter_icon"  alt="twitter_icon"/>
</a>
                </div>

                <div className="copyright-wrapper">
<p>© 2022 Metabnb</p>
                </div>

            </div>

            <div className="footer-grid-container_wrapper" id="footer-grid_wrapper">
                <div className="footer-column-container" id="footer-grid-001">
                    <div className="footer-heading-wrapper">
                        Community
                    </div>
                    <div className="footer-links" id="footer_linkss">
                    <a href ="#fullname" id="footer-column-container_text">NFT</a>
                    <a href ="#fullname" id="footer-column-container_text">Tokens</a>
                    <a href ="#fullname"  id="footer-column-container_text">Landlords</a>
                    <a href ="#fullname" id="footer-column-container_text">Discords</a>
                    </div>



                </div>

                <div className="footer-column-container" id="footer-grid-001">
                    <div className="footer-heading-wrapper">
                         Places
                    </div>
                    <a href ="#fullname" id="footer-column-container_text">Castle</a>
                    <a href ="#fullname"  id="footer-column-container_text">Farms</a>
                    <a href ="#fullname"  id="footer-column-container_text">Beach</a>
                    <a href ="#fullname" id="footer-column-container_text">Learnmore</a>



                </div>

                <div className="footer-column-container" id="footer-grid-001">
                    <div className="footer-heading-wrapper">
                     About us
                    </div>
                    <a href ="#fullname"  id="footer-column-container_text">Road map</a>
                    <a href ="#fullname"  id="footer-column-container_text">Creators</a>
                    <a  href ="#fullname" id="footer-column-container_text">Career</a>
                    <a href ="#fullname" id="footer-column-container_text">Contact us</a>



                </div>
            </div>
        </div>

    );
}

export default Footer;