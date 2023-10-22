import React from 'react';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArraow';
import Slider from "react-slick";
import "./topBrands.css";

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
const topBrandList = [
    {
        id: 1,
        title: "McDonald's",
        time: "21 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604382909.png",
    },
    {
        id: 2,
        title: "Burger King",
        time: "22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187672.png",
    },
    {
        id: 3,
        title: "Domino's Pizza",
        time: "25 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806929.png",
    },
    {
        id: 4,
        title: "KFC",
        time: "20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589432379.png",
    },
    {
        id: 5,
        title: "Subway",
        time: "22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676521141.png",
    },
    {
        id: 6,
        title: "Pizza Hut",
        time: "22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ad6c42058fd9d162b33070bc6779fd0f_1638339755.png",
    },
    {
        id: 7,
        title: "Pritam Dhaba",
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ef32edcf2d2355f3d9892be7804d9d8a_1592573765.png",
    },
    {
        id: 8,
        title: "Bharawan Da Dhaba",
        time: "14 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/04cde0bdfbf7b9a2de144dc30ab6b439_1598598193.png",
    },
]
function TopBrands(){
    return <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <div className='top-brand-box'>
        <Slider {...settings}>
          {topBrandList.map((brand) => {
                return <div>
                    <div className='top-brands-cover'>
                        <img src={brand.cover} className="top-brands-image" alt={brand.time}/>
                    </div>
                    <div className='top-brand-title'>{brand.title}</div>
                    <div className='brand-time-font'> {brand.time} </div>
                </div>
            })} </Slider>
        </div>    
    </div>
};
export default TopBrands;