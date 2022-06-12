import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

const NavItems = () => {
    return (
        <div className='lg:flex text-white'>
            <li className='hover:text-primary cursor-pointer lg:mr-8'><Link
                to='home'
                spy={true}
                activeClass='active'
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >Home</Link></li>
            <li className='hover:text-primary cursor-pointer lg:mr-8'><Link
                to='about'
                spy={true}
                activeClass='active'
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-3000'
            >About</Link></li>
            <li className='hover:text-primary cursor-pointer lg:mr-8'><Link
                to='projects'
                activeClass='active'
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >Projects</Link></li>
            {/* <li className='hover:text-primary cursor-pointer lg:mr-8'><Link
                to='services'
                activeClass='active'
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >Services</Link></li> */}
            <li className='hover:text-primary cursor-pointer lg:mr-8'><Link
                to='contact'
                activeClass='active'
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >Contact</Link></li>
            <li className='hover:text-primary cursor-pointer'><LinkRouter
                to='/blogs'
                activeClass='active'
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
            >Blogs</LinkRouter></li>
        </div>
    );
};

export default NavItems;