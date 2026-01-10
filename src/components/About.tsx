'use client';

import { SiExpress, SiMongodb, SiMysql, SiGooglebigquery, SiScikitlearn, SiGooglecloud } from 'react-icons/si';
import { FaNodeJs, FaReact, FaDocker, FaGithub } from 'react-icons/fa';

const frameworks = [
    { icon: SiExpress, name: 'Express.js' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: FaReact, name: 'React.js' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiGooglebigquery, name: 'BigQuery' },
];

const libraries = [
    { icon: SiScikitlearn, name: 'Scikit-learn' },
    { icon: SiGooglecloud, name: 'GCP' },
    { icon: FaDocker, name: 'Docker' },
    { icon: FaGithub, name: 'Git Hub' },
];

const About = () => {
    return (
        <section id="about" className="bg-white rounded-none md:rounded-[2.5rem] py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 text-center md:text-left">
                    About Me
                </h2>
                <div className="space-y-6 text-gray-500 text-sm md:text-lg leading-relaxed font-medium mb-16">
                    <p>
                        I'm a final-year Computer Science student with a passion for building web applications that solve real problems. My journey started with curiosity about how websites work, and it has evolved into a deep interest in full-stack development and emerging technologies like blockchain.
                    </p>
                    <p>
                        I believe in writing clean, maintainable code and creating intuitive user experiences. Whether it's building a REST API, designing a responsive interface, or debugging a complex issue, I approach every challenge with enthusiasm and a product-minded perspective.
                    </p>
                </div>

                {/* Frameworks & Databases */}
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
                        Frameworks & Databases I Love
                    </h3>
                    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                        {frameworks.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 w-24">
                                <item.icon className="text-4xl md:text-5xl text-gray-900" />
                                <span className="text-sm font-bold text-gray-500 text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Libraries & Services */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
                        Libraries & Services I Use
                    </h3>
                    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                        {libraries.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-3 w-24">
                                <item.icon className="text-4xl md:text-5xl text-gray-900" />
                                <span className="text-sm font-bold text-gray-500 text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
