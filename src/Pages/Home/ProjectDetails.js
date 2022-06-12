import React from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../Shared/ProjectsData';
import { MdArrowBackIos } from 'react-icons/md';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const selectedProject = projects.filter(project => project.id === projectId);
    const { name, description, point1, point2, point3, frontEndTechnology, backEndTechnology, img1, img2, img3, liveWebsite, clientLink, serverLink } = selectedProject[0];

    return (
        <div className='mx-auto h-screen flex justify-center flex-col items-center mt-12 lg:mt-0'>
            <div className='max-w-7xl mx-auto px-3 lg:px-0 lg:py-0 py-12 pt-24 lg:pt-0 '>
                <div className='flex gap-6 lg:flex-row flex-col items-center'>
                    <div class="carousel lg:w-1/4 rounded-xl lg:flex-1">
                        <div id="slide1" class="carousel-item relative w-full">
                            <img src={img1} class="w-full" alt='' />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" class="btn btn-circle btn-ghost text-neutral">❮</a>
                                <a href="#slide2" class="btn btn-circle btn-ghost text-neutral">❯</a>
                            </div>
                        </div>
                        <div id="slide2" class="carousel-item relative w-full">
                            <img src={img2} class="w-full" alt='' />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" class="btn btn-circle btn-ghost text-neutral">❮</a>
                                <a href="#slide3" class="btn btn-circle btn-ghost text-neutral">❯</a>
                            </div>
                        </div>
                        <div id="slide3" class="carousel-item relative w-full">
                            <img src={img3} class="w-full" alt='' />
                            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" class="btn btn-circle btn-ghost text-neutral">❮</a>
                                <a href="#slide4" class="btn btn-circle btn-ghost text-neutral">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-1 ml-3'>
                        <h2 className='text-primary font-semibold font-primary text-5xl lg:mb-6 mb-6'>{name}</h2>
                        <h2 className='text-white mb-4'>{description}</h2>
                        <h2 className='font-bold mb-1'>Features: </h2>
                        <h2 className='text-white'>{point1}</h2>
                        <h2 className='text-white'>{point2}</h2>
                        <h2 className='text-white'>{point3}</h2>

                        <h2 className='font-bold mt-4 mb-1'>Technologies Used: </h2>
                        <h2 className='text-white'>Front-End Technologies: {frontEndTechnology}</h2>
                        {
                            backEndTechnology && <h2 className='text-white'>Back-End Technologies: {backEndTechnology}</h2>
                        }
                        <div className='flex gap-3 my-3'>
                            <a className='text-primary hover:text-secondary transition-all duration-300' href={liveWebsite} target="_blank" rel='noReferrer'>
                                Live Website
                            </a>
                            <a className='text-primary hover:text-secondary transition-all duration-300' href={clientLink} target="_blank" rel='noReferrer'>
                                Github Client
                            </a>
                            {
                                serverLink && <a className='text-primary hover:text-secondary transition-all duration-300' href={serverLink} target="_blank" rel='noReferrer'>
                                    Github Server
                                </a>
                            }
                        </div>
                        <div>
                            <Link to='/' className='btn btn-sm btn-primary mt-2 transition-all duration-300'><MdArrowBackIos /> Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;