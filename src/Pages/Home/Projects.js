import React from 'react';
import projects from '../Shared/ProjectsData';
import Project from './Project';

const Projects = () => {
    return (
        <div id="projects" className='bg-base-300 pb-20 pt-16'>
            <div className='max-w-6xl mx-auto text-center'>
                <h4 className='font-bold text-primary text-lg mb-2'>Projects</h4>
                <h2 className='font-bold text-white text-4xl lg:text-5xl'>My Latest Projects</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-14 '>
                    {
                        projects.map(project =>
                            <Project
                                key={project.id}
                                project={project}
                            />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;