import React from 'react';
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArraow';
import "./deliveryCollections.css";
import DeliveryItem from './deliveryItem';
const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 2,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 3,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
        id: 4,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
        id: 5,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id: 6,
        title: "Fried Rice",
        cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    },
    {
        id: 7,
        title: "Sandwich",
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
        id: 8,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },
    {
        id: 9,
        title: "Shawarma",
        cover: "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
    },
    {
        id: 10,
        title: "Paratha",
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    },
    
];
const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
function DeliveryCollections(){
 return (
 <div className='delivery-collection'>
      <div className='max-width'> 
          <div className='collection-title'>Inspiration for your first order</div>
          <Slider {...settings}>
          {deliveryItems.map((item) => {
                return <DeliveryItem item={item}/>;
            })} </Slider>
   </div>
</div>);
}
export default DeliveryCollections;