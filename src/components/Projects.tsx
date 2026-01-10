'use client';

import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        title: 'Blog Platform',
        category: 'Full Stack',
        desc: 'A robust blogging solution with secure authentication and content management.',
        link: '#',
        image: '/projects/blog.png'
    },
    {
        title: 'E-Commerce Store',
        category: 'Web Application',
        desc: 'Complete online shopping experience with cart and payment features.',
        link: '#',
        image: '/projects/ecommerce.png'
    },
    {
        title: 'CardSmart System',
        category: 'Blockchain',
        desc: 'Decentralized smart card system ensuring secure and transparent transactions.',
        link: '#',
        image: '/projects/cardsmart.png'
    },
    {
        title: 'Weather App',
        category: 'Integration',
        desc: 'Real-time forecast application using external data sources.',
        link: '#',
        image: '/projects/weather.png'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="bg-white rounded-none md:rounded-[2.5rem] py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Projects
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-xl">
                            A showcase of technical expertise and product design.
                        </p>
                    </div>
                    <a href="https://github.com/sargunesh25" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-200 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                        View GitHub <FaGithub />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-gray-50 rounded-[2rem] p-6 hover:bg-black transition-colors duration-300 cursor-pointer flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 rounded-full border border-gray-200 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white group-hover:bg-gray-800 group-hover:border-gray-700 group-hover:text-gray-300 transition-colors">
                                    {project.category}
                                </span>
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                                    <FaArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors leading-tight">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors line-clamp-3">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Project Image */}
                            <div className="mt-auto w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 relative group-hover:opacity-90 transition-opacity">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <a href="https://github.com/sargunesh25" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-900 border border-gray-200 px-6 py-4 rounded-full hover:bg-gray-50 transition-all">
                        View GitHub <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
