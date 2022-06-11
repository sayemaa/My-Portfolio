import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdReadMore } from 'react-icons/md';

const Project = ({ project }) => {
    const { id, name, description, img, liveWebsite, clientLink, serverLink } = project;

    const navigate = useNavigate();

    const navigateToProjectDetails = (id) => {
        navigate(`/project/${id}`);
    }
    return (
        <div class="card w-96 bg-base-300">
            <figure><img src={img} alt={name} className='max-w-xs rounded-xl ' /></figure>
            <div class="card-body px-8">
                <h2 class="card-title justify-center">{name}</h2>
                <p>{description}</p>
                <div className='text-primary'>
                    <a href={liveWebsite} className="hover:text-secondary">Live Website</a>
                    <a href={clientLink} className="mx-4 hover:text-secondary">GitHub Client</a>
                    {
                        serverLink && <a href={serverLink} className="hover:text-secondary">GitHub Server</a>
                    }
                </div>
                <div class="card-actions justify-center mt-5">
                    <button onClick={() => navigateToProjectDetails(id)} className='btn btn-outline btn-primary btn-sm font-bold flex items-center'>See Details <MdReadMore className='ml-1' /></button>
                </div>
            </div>
        </div>
    );
};

export default Project;