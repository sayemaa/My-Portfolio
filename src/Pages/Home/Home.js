import React from 'react';
import Projects from './Projects';
import Hero from './Hero';
import Navbar from '../Shared/Navbar';
import About from './About';
import Contact from './Contact';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;