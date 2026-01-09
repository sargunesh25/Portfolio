'use client';

import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaCogs, FaLightbulb } from 'react-icons/fa';

const highlights = [
    {
        icon: FaGraduationCap,
        title: 'Education',
        desc: 'Final-year B.E. Computer Science student at Bannari Amman Institute of Technology.',
        color: 'text-blue-600'
    },
    {
        icon: FaLaptopCode,
        title: 'Technical Expertise',
        desc: 'Strong in React, Node.js, Python with experience in building full-stack applications.',
        color: 'text-green-600'
    },
    {
        icon: FaCogs,
        title: 'Experience',
        desc: 'APIs, CI/CD pipelines, MySQL, MongoDB, and cloud deployment basics.',
        color: 'text-purple-600'
    },
    {
        icon: FaLightbulb,
        title: 'Interests',
        desc: 'Decentralized applications (dApps), data analytics, and product-minded engineering.',
        color: 'text-amber-500'
    }
];

const About = () => {
    return (
        <section id="about" className="bg-white rounded-[2.5rem] py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Bio */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                            About Me
                        </h2>
                        <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
                            <p>
                                I'm a final-year Computer Science student with a passion for building web applications that solve real problems. My journey started with curiosity about how websites work, and it has evolved into a deep interest in full-stack development and emerging technologies like blockchain.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and creating intuitive user experiences. Whether it's building a REST API, designing a responsive interface, or debugging a complex issue, I approach every challenge with enthusiasm and a product-minded perspective.
                            </p>
                        </div>
                    </div>

                    {/* Right: Highlights Grid */}
                    <div className="grid gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6 flex items-start gap-5 group">
                                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm ${item.color} group-hover:bg-black group-hover:text-white group-hover:scale-110`}>
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
