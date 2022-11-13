import "./metabnb.css";


const Metabnb =()=>{
    return(
        <div className="metabnb-container_wrapper" id="metabnb-page_wrapper">
            <div className="metabnb-content-grid_wrapper" 
            id="metabnb-content_wrapper">
                <div className="metabnb-text-wrapper-container" id="metabnb-text-cn">
                <div className="metabnb-heading_wrapper">
                    <h1 id="metabnb-heading">Metabnb NFTs</h1>
                </div>
                <div className="metabnb-message_container">
                    <p id="metabnb-message">
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                    </p>
                </div>
                <div className="metabnb-btn" id="learnmore-metabnb_button">
                    <button id="learnmore__btn">Learn more</button>
                </div>
                </div>

                <div className="metabnb-images-container_wrapper">
                    <div className="meta-image" id="metabnb--img_001">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/meta1.svg`}  id ="meta-nft"  alt="NFT-location_img"/>
 
                    </div>

                    <div className="meta-image" id="metabnb--img_002">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/meta2.svg`}  id ="meta-nft"  alt="NFT-location_img"/>
 
                    </div>

                    <div className="meta-image" id="metabnb--img_003">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/meta3.svg`}  id ="meta-nft"  alt="NFT-location_img"/>
 
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Metabnb;