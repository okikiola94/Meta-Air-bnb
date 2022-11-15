import "./wallet.css";


const Wallet =(props)=>{
    return(
        <div>

<div class="Wallet-popup_wrapper" >
    <div class="First-input-popup-container-heading">
        <h3>Connect Wallet</h3>
        <img  onClick={(props.exit)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgB7ZQ9DsMgDIUdugLqCNyiN+iN2huUbh17nW7N1qOww9CNGilIHQh/yZZ8EoojXuzEfgFgZ5tIKS9KqVuLHtc1tUdmnhm897qmyKR5ov4ILQghNL6VzxUJe0ETtNBDrsji5LkiLckPJYFz7k0pHTDUnHNgjJ3DfHDdjTEa1iJ+SWtbSLWQEJ+KSxRbFAg9j23B2xGmdllrR1hKaqA1Fu5OvlqRGit2F2nx+Z+7kmdRcsjo+xNeXujzBxSI/wnyxfgDO9vjB11ZYo38vKDAAAAAAElFTkSuQmCC" alt="close" id="close"/>
        
        </div>
        <div class="Wallet-popup_details">
            <small>Choose your preferred wallet</small>
            <div>
                <div class="wallet-popup_side">
                    <div class="wallet-popup_image-wrapper ">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/popup-img1.svg`}  id ="product__logo"  alt="Meta_logo"/>
                        <p>Metamask</p>
                        </div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdLLDcIwDABQO5MwCmzAFXpoChISMA4UDrQ0CJGuwwYwAgsQEwW1Sts49SW28uR8ZAAbefmQh0LPIRJ4ruqJMfRyBYLcrZa3EBTbbPEmArdpV3W66jTYsUmOhVa2Y8p1Rr+IYewfweEB5HAQ9rEx35ngICJSkwsSnyDMy7qynyX/FWX7TfLEUbRO1OAxHOrAGGrhGHLQHwoOeXezY3a5TyESP5hYY2iFMQUpAAAAAElFTkSuQmCC" alt="vector"/>
                        </div>
                        <div class="wallet-popup_side">
                            <div class="second-wrapper_img-container"> <img src={`${process.env.PUBLIC_URL}/assets/images/popup-img2.svg`}  id ="product__logo"  alt="Meta_logo"/>
                            <p>WalletConnect</p>
                            </div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBhdLLDcIwDABQO5MwCmzAFXpoChISMA4UDrQ0CJGuwwYwAgsQEwW1Sts49SW28uR8ZAAbefmQh0LPIRJ4ruqJMfRyBYLcrZa3EBTbbPEmArdpV3W66jTYsUmOhVa2Y8p1Rr+IYewfweEB5HAQ9rEx35ngICJSkwsSnyDMy7qynyX/FWX7TfLEUbRO1OAxHOrAGGrhGHLQHwoOeXezY3a5TyESP5hYY2iFMQUpAAAAAElFTkSuQmCC" alt="vector"/>
                            </div>
                            </div>
                            </div>
                            </div>
        </div>
    );
}

export default Wallet;