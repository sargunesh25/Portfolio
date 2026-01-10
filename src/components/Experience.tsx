"use client";

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "CodeInBound",
        role: "Software Development Engineer",
        date: "December 2025 - Present",
        points: [
            "Served as a Backend Engineer focused on architecting and managing a robust network management application using NestJS, ensuring high availability and scalability.",
            "Designed efficient API endpoints and optimized database queries to handle real-time network data, improving overall system performance and reliability."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="bg-white rounded-none md:rounded-[2.5rem] py-24 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-12 text-left">
                    Where I've Worked
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-0 md:pl-0 border-l-0 border-gray-200"
                        >
                            <h3 className="text-2xl font-bold text-gray-900">
                                {exp.role} <span className="text-gray-900">@ <span className="underline decoration-2 underline-offset-4">{exp.company}</span></span>
                            </h3>
                            <p className="text-sm font-medium text-gray-500 font-mono mb-6 mt-1">
                                {exp.date}
                            </p>

                            <ul className="space-y-4">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-base leading-relaxed">
                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
