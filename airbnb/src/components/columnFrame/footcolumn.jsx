import "./footcolumn.css"

const footcolumn= ()=>{
    return(
<div className="foot-column_wrapper" id="column_wrapper">
    <div className="inner-column_wrapper" id="inner_column-wrapper">
        <div className="Mb_token-Wrapper">
        <div className="Mb_token-image_wrapper" id="Mb_token-img_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/mbtoken_icon.png`}  id ="mbtoken_icon"  alt="mbtoken_icon"/>
        </div> 
        <div className="mb-token-text_wrapper" id="mb-token_text-wrapper">
            <div className="mbtoken-text">MBToken</div>
        </div>
        </div>

        <div className="MetaMask-Wrapper">
        <div className="Metamask-image_wrapper" id="Metamask-img_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/metamask_icon.png`}  id ="Metamask_icon"  alt="Metamask_icon"/>
        </div> 
        <div className="Metamask-text_wrapper" id="Metamask_text-wrapper">
            <div className="metamask-text">METAMASK</div>
        </div>
        </div>

        <div className="opensea-Wrapper">
        <div className="opensea-image_wrapper" id="opensea-img_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/opensea_icon.png`}  id ="opensea_icon"  alt="opensea_icon"/>
        </div> 
        <div className="opensea-text_wrapper" id="opensea_text-wrapper">
            <div className="opensea-text">opensea</div>
        </div>
        </div>
    </div>

</div>
    );
};

export default footcolumn;