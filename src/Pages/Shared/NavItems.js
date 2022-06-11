import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = ({ items }) => {
    return (
        <li className='text-white hover:text-primary lg:mr-8'>
            <Link
                to={items.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'>{items.name}
            </Link>
        </li>
    );
};

export default NavItems;