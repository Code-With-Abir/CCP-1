import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="">
                <Hero />
            </div>
        </div>
    );
};

export default Home;