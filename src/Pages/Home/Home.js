import React from 'react';
import picture from '../../assets/images/picture-1.png'
import PrimaryButton from '../Shared/PrimaryButton';
import resume from '../../assets/portfolio/Resume-Sayema.pdf';

const Home = () => {
    return (
        <div id="home" className='bg-base-300'>
            <div className='max-w-7xl mx-auto'>
                <div class="hero">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={picture} class="lg:w-100 lg:flex hidden rounded-lg ml-32" />
                        <div className='text-center lg:text-start lg:max-w-lg lg:ml-5'>
                            <p>Hi there! I'm Sayema Akhtar.</p>
                            <h1 class="text-6xl font-bold py-6">I Design Web Interfaces</h1>
                            <div className='flex justify-center lg:justify-start'>
                                <div className='mr-4'><PrimaryButton>Get In Touch</PrimaryButton>
                                </div>
                                <div>
                                    <a
                                        href={resume}
                                        className="btn text-white font-bold btn-secondary capitalize"
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