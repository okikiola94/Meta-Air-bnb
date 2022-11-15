import Home from "../airbnb-home/home";
import Footcolumn from "../columnFrame/footcolumn";
import Inspiration from "../inspiration/inspiration";
import Metabnb from "../metabnb/metabnb";

const Fullpage  = () => {
    return (
        <div>
            <Home/>
            <Footcolumn/>
            <Inspiration/>
            <Metabnb/>

        </div>
    )
}
export default Fullpage;