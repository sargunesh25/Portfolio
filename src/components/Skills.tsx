'use client';

import React from 'react';
import { FaLaptopCode, FaServer, FaLayerGroup, FaCube, FaBrain } from 'react-icons/fa';

const services = [
    {
        icon: FaLaptopCode,
        title: 'Frontend & UI',
        description: 'Building responsive, pixel-perfect interfaces using React, Next.js, and Tailwind CSS.',
    },
    {
        icon: FaServer,
        title: 'Backend Systems',
        description: 'Architecting robust server-side applications with Node.js, Express, and efficient database designs.',
    },
    {
        icon: FaBrain,
        title: 'AI Systems',
        description: 'Building intelligent agents, RAG systems, and fine-tuning LLMs for custom use cases.',
    },
    {
        icon: FaCube,
        title: 'Blockchain / Web3',
        description: 'Developing decentralized applications and smart contracts for the future of the web.',
    }
];

const Skills = () => {
    return (
        <section id="services" className="bg-white rounded-none md:rounded-[2.5rem] py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-left mb-20 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Ready to collaborate with brands to create impactful results.
                    </h2>
                    {/* Optional: Divider or subtitle */}
                    <div className="mt-8 flex justify-start">
                        <span className="bg-white border border-gray-200 px-6 py-2 rounded-full text-sm font-medium shadow-sm">
                            Services
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="space-y-4 group">
                            <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 transition-colors shadow-sm text-black group-hover:bg-black group-hover:text-white`}>
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
