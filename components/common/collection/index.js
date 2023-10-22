import React from "react";
import "./collection.css";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArraow';


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
function Collection({list}){
    return <div className="collection-wrapper">
    <div className = "max-width collection">
    <div className="collection-title "> Collections</div> 
    <div className="collection-subtitle-row">
    <div className="collection-subtitle-text">Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends </div>
    <div className="collection-location">
    <div>All collections in Pune</div>
    <i class="fi fi-rr-caret-right  absolute-center"></i>
    </div>
    </div>
    <slider {...settings}>
        {list.map((item)=>(
           <div>
            <div className = "collection-cover">
                <img src={item.cover} className="collection-image" alt ={item.title}>
                </img>
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                <div> {item.places}</div>
                <i class="fi fi-rr-caret-right  absolute-center"></i>
                </div>
                </div>
           </div> 
        ))}
    </slider>
    </div>
    </div>
}
export default Collection;