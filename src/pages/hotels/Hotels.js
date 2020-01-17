import React from 'react';
import Header from './../../layout/header';
import Sidebar from './../../layout/sidebar';
import Footer from './../../layout/footer';
import HotelList from './../../components/HotelList';
const Hotels = () => {
    const HOTELS = [{
        id:1,
        name:"Marriot Hotel",
        city:"Islamabad",
        address:"Secretriat Islamabad street 10",
        description:"PLease ignore this description",
        stars:5,
        status:"Active"
    }];
    return (
            <div>
                <Header />
                <Sidebar />
                <HotelList hotels={HOTELS} />
                <Footer />
            </div>
        )
    
};

export default Hotels;
