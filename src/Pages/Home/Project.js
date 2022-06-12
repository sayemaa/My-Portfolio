import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdReadMore } from 'react-icons/md';

const Project = ({ project }) => {
    const { id, name, description, img1, liveWebsite, clientLink, serverLink } = project;

    const navigate = useNavigate();

    const navigateToProjectDetails = (id) => {
        navigate(`/project/${id}`);
    }
    return (
        <div class="card w-96 bg-base-300">
            <figure><img src={img1} alt={name} className='max-w-xs rounded-xl ' /></figure>
            <div class="card-body px-8">
                <h2 class="card-title justify-center">{name}</h2>
                <p>{description}</p>
                <div className='text-primary'>
                    <a
                        target="_blank"
                        href={liveWebsite}
                        rel="noReferrer"
                        className="hover:text-secondary transition-all duration-300">Live Website</a>
                    <a
                        target="_blank"
                        href={clientLink}
                        rel="noReferrer"
                        className="mx-4 hover:text-secondary transition-all duration-300">GitHub Client</a>
                    {
                        serverLink && <a
                            target="_blank"
                            href={serverLink}
                            rel="noReferrer"
                            className="hover:text-secondary transition-all duration-300">GitHub Server</a>
                    }
                </div>
                <div class="card-actions justify-center mt-5">
                    <button onClick={() => navigateToProjectDetails(id)} className='btn btn-outline btn-primary btn-sm font-bold flex items-center transition-all duration-300'>See Details <MdReadMore className='ml-1' /></button>
                </div>
            </div>
        </div>
    );
};

export default Project;