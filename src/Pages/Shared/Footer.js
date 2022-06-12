import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-base-300 text-base-content rounded">
            <div>
                <div class="grid grid-flow-col gap-5">
                    <a target="_blank" rel="noReferrer" href="https://www.linkedin.com/in/sayema-akhtar-6328781a1/" className='hover:text-primary transition-all duration-300 text-2xl' smooth={true} ><FaLinkedinIn /></a>
                    <a target="_blank" rel="noReferrer" href="https://github.com/sayemaa" className='hover:text-primary text-2xl transition-all duration-300' smooth={true}><FaGithub /></a>
                </div>
            </div>
            <div>
                <p>© {new Date().getFullYear()} Sayema Akhtar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;