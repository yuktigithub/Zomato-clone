import React from 'react';
import Collection from '../common/collection';
import "./diningOut.css";
const collectionList = [
    {
    id: 1,
    title: "11 Best Insta-worthy Places",
 cover: "	https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252825.jpg",
    places: "11 places"
    },
    {
        id: 2,
        title: "25 Summer Bonanza Offers",
        places: "23 places",
        cover: "https://b.zmtcdn.com/data/collections/67a60db3f6e42b07bfb4982a82cf37e2_1686375467.jpg",
        },
    {
            id: 3,
            title: "16 bars and pubs",
            cover: "	https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg",
            places: "14 places"
            },
            {
                id: 4,
                title: "13 Serene Rooftop Places",
                cover: "	https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg",
                places: "15 places"
                },
                {
                    id: 5,
                    title: "Blissfull Breakfast Places",
                    cover: "	https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg",
                    places: "8 places"
                    },
                    {
                        id: 6,
                        title: "Newly Opened Restaraunts",
                        cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674839413.jpg",
                        places: "5 places"
                        },

]
function DiningOut(){
    return <div>
        <Collection list={collectionList}/>
    </div>;

};
export default DiningOut;




