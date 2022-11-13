import "./Home.css";
import SearchBar from "../search/search";

const Home = ()=>{
    return (<div className="home-page" id="home">
         <div className="home-class_grid" id="home_grid">
       <div className="home_intro" id="home-intro_message">
        <div className="first-paragraph" id="inner-paragraph_01">
        <p className="intro-paragraph" id="intro_paragragh">
            Rent a <span id="gradient_paragragh">Place</span>  away from <span id="gradient_paragragh">Home</span> in the <span id="gradient_paragragh">Metaverse</span>
        </p>
        </div>
        <div className="second-paragraph" id="inner-paragraph_02_wrapper">
            <p className="inner-paragraph_02" id="inner_paragraph-02">
                We provide you access to luxury and affordable houses in the metaverse.Get a chance to turn your imagination to reality at your comfort zone.
            </p>
        </div> 
       <div className="search-box" id="search_box">
        <SearchBar/>
       </div>
        </div>

       <div className="image-cluster_container" id="image-container_wrapper">
       <div className="image-frame" id="image-wrapper_frame">
        <div className="firstframe">
        <div className="image_wrapper" id="first-image_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img1.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
        </div>
        <div className="image_wrapper" id="second-image_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img2.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
        </div>
        </div>
        <div className="secondframe">
        <div className="image_wrapper" id="third-image_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img3.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
        </div>
        <div className="image_wrapper" id="forth-image_wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/images/home-img4.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
        </div>
        </div>
        </div>
       </div>
       </div> 
    </div>
    );
}

export default Home;