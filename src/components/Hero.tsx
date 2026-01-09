'use client';

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaCode, FaPaintBrush, FaRocket, FaLaptopCode, FaDatabase, FaLayerGroup, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; // Icons for logos placeholders
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);



    return (
        <section id="home" className="bg-white rounded-[2.5rem] pt-24 pb-12 px-6 md:px-12 min-h-screen flex flex-col justify-center relative overflow-hidden">

            {/* Profile Image & Bubble */}
            <div className="flex justify-center mb-6 relative">
                <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-xl">
                        {/* Placeholder for user image if not available, using gradient for now */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-white text-3xl font-bold">
                            SS
                        </div>
                        {/* <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                    </div>
                    <div className="absolute top-4 -right-12 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100 flex items-center gap-2 animate-swing">
                        <span className="text-sm font-medium">Sargunesh 👋</span>
                    </div>
                </div>
            </div>

            {/* Main Typography */}
            <div className="text-center max-w-4xl mx-auto space-y-6 mb-6 min-h-[120px] flex flex-col justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2]">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString('Building digital <br/>products, brands, and <br/><span style="color: #6b7280;">experience.</span>')
                                .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: false,
                            cursor: '|',
                            delay: 50,
                        }}
                    />
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                    Hi, I'm Sargunesh. A Software Developer & Web Enthusiast building reliable web applications and decentralized solutions.
                </p>
            </div>

            {/* CTA Button with Embedded Socials */}
            <div className="flex justify-center mb-0">
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group bg-black rounded-full p-1.5 pl-6 pr-2 flex items-center transition-all duration-300 hover:pr-2 cursor-pointer"
                >
                    <span className="text-white font-medium mr-2">Connect</span>

                    {/* Social Icons - Reveal on Hover or on Load */}
                    <div className={`flex items-center gap-2 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100'}`}>
                        <a href="https://github.com/sargunesh25" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                            <FaGithub size={14} />
                        </a>
                        <a href="https://www.linkedin.com/in/sargunesh2507/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white transition-colors">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="mailto:sargunesh2507@gmail.com" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-colors">
                            <FaEnvelope size={14} />
                        </a>
                        <div className="w-px h-4 bg-gray-700 mx-1"></div>
                    </div>

                    <a href="#contact" className="bg-white rounded-full p-2.5 text-black hover:scale-105 transition-transform">
                        <BsArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Logos / Tech Stack Strip */}
            <div className="border-t border-dashed border-gray-200 pt-6 mt-6">
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {/* Using text/icons as placeholders for brands/tech */}
                    <div className="flex items-center gap-2 text-xl font-bold font-mono text-gray-400 hover:text-black hover:animate-bounce cursor-pointer transition-colors"><FaCode /> Next.js</div>
                    <div className="flex items-center gap-2 text-xl font-bold font-mono text-gray-400 hover:text-black hover:animate-bounce cursor-pointer transition-colors"><FaPaintBrush /> Tailwind</div>
                    <div className="flex items-center gap-2 text-xl font-bold font-mono text-gray-400 hover:text-black hover:animate-bounce cursor-pointer transition-colors"><FaDatabase /> MongoDB</div>
                    <div className="flex items-center gap-2 text-xl font-bold font-mono text-gray-400 hover:text-black hover:animate-bounce cursor-pointer transition-colors"><FaLayerGroup /> Prisma</div>
                    <div className="flex items-center gap-2 text-xl font-bold font-mono text-gray-400 hover:text-black hover:animate-bounce cursor-pointer transition-colors"><FaRocket /> Vercel</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
