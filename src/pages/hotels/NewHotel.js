import React, { Component } from 'react';
import Header from './../../layout/header';
import Sidebar from './../../layout/sidebar';
import Footer from './../../layout/footer';
import NewHotelForm from './../../components/NewHotelForm';

const NewHotel = () => {
    return (
            <div>
                <Header />
                <Sidebar />
                <NewHotelForm />
                <Footer />
            </div>
        )
    
}

export default NewHotel;
