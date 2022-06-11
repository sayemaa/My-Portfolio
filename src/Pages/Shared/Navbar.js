import React, { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import NavItems from './NavItems';

const Navbar = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    const menuItems = [
        {
            name: 'Home',
            href: 'home'
        },
        {
            name: 'About',
            href: 'about'
        },
        {
            name: 'Projects',
            href: 'projects'
        },
        {
            name: 'Contact',
            href: 'contact'
        }
    ]

    return (
        <div className={`${bg ? 'bg-[#0a0f19] h-20' : 'h-24'
            } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}>
            <div class="navbar max-w-6xl mx-auto mt-2">
                <div class="navbar-start lg:hidden">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                <NavItems />
                            }
                        </ul>
                    </div>
                </div>
                <div class="navbar-start hidden lg:flex">
                    <ul class="flex p-0 ">
                        {
                            <NavItems />
                        }
                    </ul>
                </div>
                <div class="navbar-end mr-5 lg:mr-0">
                    <a target="_blank" rel="noReferrer" href="https://github.com/sayemaa" className='mr-6 hover:text-primary transition-all duration-300' smooth={true} ><FiLinkedin /></a>
                    <a target="_blank" rel="noReferrer" href="https://github.com/sayemaa" className='hover:text-primary transition-all duration-300' smooth={true}><FiGithub /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;