import React from 'react';
import Footer from '../../footer/Footer'
import Navbar from '../../Nav/Navbar';
import Header from './Header'
import WorkProcess from './Work-Process';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <WorkProcess/>
            <Footer/>
        </div>
    );
}

export default Home;