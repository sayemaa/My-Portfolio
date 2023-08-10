import React from 'react';
import picture from '../../assets/images/pic1.png'
import resume from '../../assets/portfolio/Resume-Sayema.pdf';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div id="home" className='bg-base-300 pb-28 pt-10 lg:pt-8 lg:pb-0 lg:mb-0'>
            <div className='max-w-7xl mx-[102px]'>
                <div class="hero">
                    <div class="hero-content flex-col pb-0 lg:flex-row-reverse">
                        <img src={picture} class="lg:w-[500px] lg:flex hidden rounded-lg ml-24" alt="Sayema Akhtar" />
                        <div className='text-center lg:text-start lg:max-w-lg lg:ml-5 mt-28 lg:mt-[-65px]'>
                            <p className='text-primary text-lg font-medium'>Hi there! I'm Sayema Akhtar.</p>
                            <h1 class="lg:text-6xl text-5xl text-white font-bold py-6">I Design Web Interfaces</h1>
                            <div className='mt-3 flex justify-center lg:justify-start'>
                                <div className='mr-3'>
                                    <Link to="projects" className="btn text-white font-bold btn-primary transition-all duration-300" smooth>Explore</Link>
                                </div>
                                <div>
                                    <a
                                        href={resume}
                                        className="btn text-white font-bold btn-primary transition-all duration-300"
                                        download="Resume of Sayema Akhtar"
                                    >
                                        Resume
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