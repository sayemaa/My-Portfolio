import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

const Blogs = () => {
    return (
        <div className='mx-auto lg:h-screen flex justify-center flex-col items-center mt-56 lg:mt-0'>
            <h4 className='text-3xl text-primary font-bold mb-3'>Blogs</h4>
            <h2 className='text-5xl font-semibold mb-12'>Coming Soon..</h2>
            <div>
                <Link to='/' className='btn btn-sm btm-outline btn-primary mt-2 transition-all duration-300'><MdArrowBackIos /> Home</Link>
            </div>
        </div>
    );
};

export default Blogs;