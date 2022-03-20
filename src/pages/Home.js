import React from 'react';
import AboutUs from '../components/AboutUs';
import FamousCourses from '../components/FamousCourses';
import HomeBanner from '../components/HomeBanner';
import PopularSubject from '../components/PopularSubject';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeBanner />
            <PopularSubject />
            <AboutUs/>
            <FamousCourses/>
            <Footer/>
        </>
    );
};

export default Home;