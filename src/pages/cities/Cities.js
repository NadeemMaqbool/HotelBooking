import React from 'react';
import Header from './../../layout/header';
import Sidebar from './../../layout/sidebar';
import Footer from './../../layout/footer';
import CityList from './../../components/CityList';


const Cities = () => {
    const CITIES = [{
        id:1,
        name:"Islamabad",
        country:"Pakistan",
        description:"PLease ignore this description",
        status:"Active"
    }]
    return (
        <div>
            <Header />
            <Sidebar />
            <CityList cities={CITIES} />
            <Footer />
        </div>
    )   
};
 
export default Cities;