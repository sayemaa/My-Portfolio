import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div id="contact" className='pb-20 pt-12'>
            <div className='text-center pb-8'>
                <h3 className='text-xl text-primary font-bold mb-4'>Contact</h3>
                <h2 className='text-3xl font-normal'>Get in Touch</h2>
            </div>
            <form
                method="POST"
                action="https://formspree.io/f/xjvlzedj"
                className='grid grid-cols-1 justify-items-center gap-5 px-6 lg:px-0'>
                <input
                    required
                    name='Name'
                    type='text'
                    placeholder='Full Name'
                    className='input w-full max-w-md bg-[#141831]'
                /><input
                    required
                    name='Email'
                    type='email'
                    placeholder='Email Address'
                    className='input w-full max-w-md bg-[#141831]'
                />
                <input
                    name='Subject'
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md bg-[#141831]'
                />
                <textarea
                    required
                    name='Message'
                    className='textarea w-full max-w-md bg-[#141831]'
                    placeholder='Your message'
                    rows={5}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </div>
    );
};

export default Contact;