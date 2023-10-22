import React from 'react';
import "./header.css";
function Header (){
    return (
    <div className="max-width header">
    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
     alt = "zomato-logo" className="header-logo"/>
     <div className='header-right'>
        <div className="header-location-search-container">
            <div className='location-wrapper'>
                <div className='location-icon-name'>
                <i className="fi fi-rr-marker absolute-center location-icon" ></i>
                <div className='location-name'>Banglore</div>
                </div>
                <i className='fi fi-rr-caret-down absolute-center caret-symbol'></i>
            </div>
            <div className='location-search-separator'></div>
            <div className='header-searchBar'></div>
            <i className='fi fi-rr-search absolute-center search-icon'></i>
            <input placeholder='Search for restaurant, cusine or a dish' className='search-input'/>
            </div>
     </div>
     <div className=' profile-wrapper'>
        <img
        src= "https://img.freepik.com/free-vector/coffee-love-foam-with-beans-cartoon-icon-illustration_138676-2575.jpg?w=50"
        alt = "profile-img"
        className='header-profile-image'/>
        <span className='header-username'>Shrey</span>
        <i className='fi fi-rr-angle-small-down absolute-center profile-option-icon'></i>


     </div>

    </div>);  
};
export default Header ;