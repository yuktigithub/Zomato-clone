import React from 'react';
import { restaurants } from '../../../data/restaurants';
import ExploreCard from './exploreCard';
import "./exploreSection.css";
function ExploreSection({list, collecionName}){
    return <div className='max-width explore-section'>
        <div className='collection-title'>{collecionName}</div>
        <div className='explore-grid'>{list.map((restaurant)=>{
            return <ExploreCard restaurant={restaurant}/>
        })}</div>
    </div>
};
  
        
export default ExploreSection;