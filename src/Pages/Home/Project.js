import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../Shared/PrimaryButton';
import { MdReadMore } from 'react-icons/md';

const Project = ({ project }) => {
    const { name, description, img, liveWebsite, clientLink, serverLink } = project;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="project" /></figure>
            <div class="card-body text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div className='text-primary'>
                    <a href={liveWebsite} className="hover:text-secondary">Live Website</a>
                    <a href={clientLink} className="mx-4 hover:text-secondary">GitHub Client</a>
                    <a href={serverLink} className="hover:text-secondary">GitHub Server</a>
                </div>
                <div class="card-actions justify-center mt-5">
                    <button className='btn btn-outline btn-primary btn-sm font-bold  flex items-center' to="">See Details <MdReadMore className='ml-1' /></button>
                </div>
            </div>
        </div>
    );
};

export default Project;