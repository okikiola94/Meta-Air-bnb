import Home from "../airbnb-home/home";
import Footcolumn from "../columnFrame/footcolumn";
import Inspiration from "../inspiration/inspiration";
import Metabnb from "../metabnb/metabnb";
import Footer from "../footer/footer";

const Fullpage  = () => {
    return (
        <div>
            <Home/>
            <Footcolumn/>
            <Inspiration/>
            <Metabnb/>
            <Footer/>

        </div>
    )
}
export default Fullpage;