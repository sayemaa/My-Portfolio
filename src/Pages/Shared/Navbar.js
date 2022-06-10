import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import NavItems from './NavItems';

const Navbar = () => {

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

    // const menuItems = <>
    //     <li className='text-white hover:text-secondary mr-8'>
    //         <Link
    //             to="home"
    //             activeClass='active'
    //             smooth={true}
    //             duration={500}
    //             offset={-70}
    //             className='transition-all duration-300'>Home</Link></li>
    //     <li className='text-white hover:text-secondary mr-8'>
    //         <Link
    //             to="/about"
    //             activeClass='active'
    //             smooth={true}
    //             duration={500}
    //             offset={-70}
    //             className='transition-all duration-300'>About</Link></li>
    //     <li className='text-white hover:text-secondary mr-8'><Link to="/projects" activeClass='active'
    //         smooth={true}
    //         duration={500}
    //         offset={-70}
    //         className='transition-all duration-300'>Projects</Link></li>
    //     <li className='text-white hover:text-secondary mr-8'><Link to="/contact" activeClass='active'
    //         smooth={true}
    //         duration={500}
    //         offset={-70}
    //         className='transition-all duration-300'>Contact</Link></li>
    // </>

    return (
        <div className='max-w-6xl mx-auto'>
            <div class="navbar bg-base-100 mt-2">
                <div class="navbar-start lg:hidden">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems.map((items, index) => <NavItems key={index + 1} items={items}></NavItems>)
                            }
                        </ul>
                    </div>
                </div>
                <div class="navbar-start hidden lg:flex">
                    <ul class="flex p-0 ">
                        {
                            menuItems.map((items, index) => <NavItems key={index + 1} items={items}></NavItems>)
                        }
                    </ul>
                </div>
                <div class="navbar-end mr-5 lg:mr-0">
                    <a target="_blank" href="https://github.com/sayemaa" className='mr-6'><FiLinkedin /></a>
                    <a target="_blank" href="https://github.com/sayemaa"><FiGithub /></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;