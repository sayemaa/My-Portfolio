import React from 'react';
import Project from './Project';
import spareGear from '../../assets/projects/Spare Gear.png'
import fragrance from '../../assets/projects/Fragrance.png'
import inDent from '../../assets/projects/inDent.png'

const Projects = () => {
    const projects = [
        {
            name: "Spare Gear",
            description: "Spare gear provides the best quality motorbike parts of your motorcycle.",
            img: spareGear,
            liveWebsite: "https://manufacturer-website-318ed.web.app/",
            clientLink: "https://github.com/sayemaa/Spare-Gear-Client",
            serverLink: "https://github.com/sayemaa/Spare-Gear-Server",
        },
        {
            name: "Fragrance",
            description: "Fragrance is a perfume warehouse where you may find scents from various brands.",
            img: fragrance,
            liveWebsite: "https://warehouse-management-web-79467.web.app/",
            clientLink: "https://github.com/sayemaa/Fragrance-Warehouse-Client",
            serverLink: "https://github.com/sayemaa/Fragrance-Warehouse-Server",
        },
        {
            name: "inDent",
            description: "inDent is a website that offers dental services by a professional dentist.",
            img: inDent,
            liveWebsite: "https://dental-service-f0546.web.app/",
            clientLink: "https://github.com/sayemaa/inDent",
            serverLink: "",
        },
    ]
    return (
        <div className='max-w-6xl mx-auto text-center my-36'>
            <h4 className='font-bold text-transparent text-lg bg-clip-text bg-gradient-to-r from-primary to-secondary'>Projects</h4>
            <h2 className='font-bold text-5xl'>My Latest Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center mt-14'>
                {
                    projects.map((project, index) =>
                        <Project
                            key={index + 1}
                            project={project}
                        />)
                }
            </div>
        </div>
    );
};

export default Projects;