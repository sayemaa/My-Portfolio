import React from 'react';
import { Link } from 'react-scroll';
import picture from '../../assets/images/about-picture.jpg'

const About = () => {
    return (
        <div id="about" className='max-w-7xl mx-auto lg:px-12 pt-16 pb-20'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={picture} class="lg:max-w-lg max-w-xs rounded-xl shadow-2xl" alt="Sayema Akhtar" />
                    <div className='lg:ml-7 px-3 lg:px-0'>
                        <h1 class="lg:text-5xl text-4xl text-white font-bold text-center lg:text-start">Sayema Akhtar</h1>
                        <h4 class="text-xl text-primary font-bold my-4 lg:my-6 text-center lg:text-start">Junior Web Developer</h4>
                        <p class="py-3 mb-2 text-center lg:text-start">I am a student of Computer Science and Engineering having excellent programming and web development skills. I am adept at HTML, CSS, JavaScript, and React for Front-End Web Development, as well as Node.js, MongoDB, and Express.js for Back-End Web Development. Besides having splendid CGPA and academic excellence, I worked on several MERN stack projects, writing client and server-side code and performing crud operations.</p>
                        <div className="flex justify-center lg:justify-start">
                            <Link to="contact" className="btn text-white font-bold btn-primary transition-all duration-300 mt-1" smooth>Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;