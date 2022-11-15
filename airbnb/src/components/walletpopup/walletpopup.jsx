import Wallet from "../wallet/wallet";
import { useState } from "react";

const Walletpopup =()=>{
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <div>
        <div className="avatar">
        <div className="avatar-content">
       <button onClick={() => {
      setIsNavExpanded(!isNavExpanded);}}className="connect-wallet">Connect wallet</button> 
        </div>
      </div>
     
      {isNavExpanded && <Wallet exit={() => setIsNavExpanded(false)} />
  }









  </div> );
}


export default Walletpopup;