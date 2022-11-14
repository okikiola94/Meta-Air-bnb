import "./place.css";
import Footer from "../footer/footer";


const Place =()=>{
    return (
        <div className="meta-Places-wrapper">
<div className="meta-places-heading-container">
<div className="heading-grid-wrapper">
   <div className="head-links-wrapper">
      <a href="#fullcolumn" id="resturant_link">Restaurant</a>
      <a href="#fullcolumn" id="cottage_link">Cottage</a>
      <a href="#fullcolumn" id="castle_link">Castle</a>
      <a href="#fullcolumn" id="fantas_link">Fantast city</a>
      <a href="#fullcolumn" id="beach_link">Beach</a>
      <a href="#fullcolumn" id="garden_link">Garden</a>
      <a href="#fullcolumn" id="off-grid_link">Off-grid</a>
      <a href="#fullcolumn" id="farm_link">Farm</a>
   </div>
   
</div>

</div>

<div className="location-place-grid_wrapper">
<div className="place-image-column_wrapper" id="image-wrapper">
<div className="place-image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img1.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img2.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img3.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>



<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img4.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>


<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img5.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img6.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img7.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img8.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img9.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img10.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img11.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img12.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img13.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img14.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img15.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>

<div className="image-column_wrapper" id="image-wrapper">
<div className="image-wrapper" id="image_wrapper">
<img src={`${process.env.PUBLIC_URL}/assets/images/location-img16.svg`}  id ="cluster_meta_location"  alt="Meta_location"/>
</div>
<div className="image-column-text-wrapper">
   <div className="image-colum-text-name_grid">
    <p id="location-name">Desert king</p>
    <p id="location-distance">2345km away</p>
    <div className="starratings" id="star-rating">
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    <img src={`${process.env.PUBLIC_URL}/assets/images/star 2.svg`}  id ="rating"  alt="star"/>
    </div>
   </div>
   <div className="image-column-text-price-grid">
    <p id="location-price">1MBT per night</p>
    <p id="availability">Available for 2 weeks stay</p>
   </div>
</div>
</div>


</div>
<div className="footer-place-wrapper">
           <Footer/> 
           </div>
        </div>
    );
}

export default Place;