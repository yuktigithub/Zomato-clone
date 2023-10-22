import React, {useState} from 'react';
import Footer from '../../components/common/footer';
import Header from '../../components/common/header';
import TabOption from '../../components/common/tabOptions';
import Delivery from '../../components/delivery';
import DiningOut from '../../components/diningOut';
import NightLife from '../../components/nightLife';

function Homepage(){
    const [activeTab, setActiveTab] = useState("Dining out");

    return (<div>
    <Header/>
    <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
    {getCorrectScreen(activeTab)}
    <Footer/>
     </div>);
};
function getCorrectScreen(tab){
    switch (tab){
        case "Delivery":
        return <Delivery/>;
        case "Dining out":
            return <DiningOut/>;
        case "Night life":
            return <NightLife/>;
        default:
            return  <Delivery/>; 
    } 
    };

export default Homepage;