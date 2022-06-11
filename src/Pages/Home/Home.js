import React from 'react';
import picture from '../../assets/images/picture-1.png'
import PrimaryButton from '../Shared/PrimaryButton';
import resume from '../../assets/portfolio/Resume-Sayema.pdf';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="home" className='bg-base-300'>
            <div className='max-w-7xl mx-auto'>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={picture} class="lg:w-[600px] lg:flex hidden rounded-lg ml-5" />
                        <div className='text-center lg:text-start lg:max-w-lg lg:ml-5 mt-12 lg:mt-[-65px]'>
                            <p className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium'>Hi there! I'm Sayema Akhtar.</p>
                            <h1 class="lg:text-6xl text-5xl font-bold py-6">I Design Web Interfaces</h1>
                            <div className='mt-3 flex justify-center lg:justify-start'>
                                <div className='mr-3'>
                                    <Link to="contact" className="btn text-white font-bold btn-primary capitalize " smooth>Get In Touch</Link>
                                </div>
                                <div>
                                    <a
                                        href={resume}
                                        className="btn text-white font-bold btn-primary capitalize"
                                        download="Resume of Sayema Akhtar"
                                    >
                                        Download CV
                                    </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;