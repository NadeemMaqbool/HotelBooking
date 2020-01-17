import React, { Component } from 'react';
import Header from './../../layout/header';
import Sidebar from './../../layout/sidebar';
import Footer from './../../layout/footer';
import NewCityForm from './../../components/NewCityForm';
export default class NewCity extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <NewCityForm />
                <Footer />
            </div>
        )
    }
}
