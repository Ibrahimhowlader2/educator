import React from 'react';
import AboutUs from '../components/AboutUs';
import FamousCourses from '../components/FamousCourses';
import HomeBanner from '../components/HomeBanner';
import PopularSubject from '../components/PopularSubject';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <PopularSubject />
            <AboutUs />
            <FamousCourses />
            <Footer />
        </>
    );
};

export default Home;