'use client';

import React from 'react';
import { FaCode, FaTrophy, FaRocket, FaCertificate, FaGoogle, FaFacebook, FaGraduationCap } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const stats = [
    { icon: FaCode, value: '200+', label: 'LeetCode Problems Solved', color: 'text-blue-500', bg: 'bg-blue-100' },
    { icon: FaTrophy, value: '1st', label: 'Runner-Up PitchStorm', sub: '@ NIT Trichy Innovation Challenge', color: 'text-green-500', bg: 'bg-green-100' },
    { icon: FaRocket, value: '3+', label: 'Live Deployments', sub: 'Production-ready applications', color: 'text-purple-500', bg: 'bg-purple-100' },
    { icon: FaCertificate, value: '2+', label: 'Certifications', sub: 'Google & Meta certified', color: 'text-yellow-500', bg: 'bg-yellow-100' },
];

const achievements = [
    {
        icon: FaTrophy,
        title: 'PitchStorm 2024 - 1st Runner-Up',
        desc: 'Secured second place in the prestigious Innovation challenge at NIT Trichy, competing against 50+ teams with a blockchain-based solution.',
        meta: 'National Institute of Technology, Trichy • 2024',
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: FaGraduationCap,
        title: 'Academic Excellence',
        desc: 'Maintained consistent academic performance with 8.2 CGPA while actively participating in coding competitions and hackathons.',
        meta: 'Bannari Amman Institute of Technology • 2021-2025',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: SiGooglecloud,
        title: 'Google Cloud Certification',
        desc: 'Completed Google Cloud Platform fundamentals and cloud architecture courses, gaining expertise in cloud deployment and management.',
        meta: 'Google Cloud • 2024',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: FaFacebook,
        title: 'Meta Front-End Developer',
        desc: 'Earned professional certification in front-end development, covering React, responsive design, and modern web development practices.',
        meta: 'Meta (Facebook) • 2024',
        color: 'bg-indigo-100 text-indigo-600'
    }
];

// Helper for the icon in achievements array

const Achievements = () => {
    return (
        <section id="achievements" className="bg-white rounded-[2.5rem] py-24 px-6 md:px-12">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm">MILESTONES</span>
                    <h2 className="text-4xl font-bold mt-2 relative inline-block">
                        Achievements & Recognition
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                    </h2>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="card text-center p-6 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${stat.bg} ${stat.color} text-2xl`}>
                                <stat.icon />
                            </div>
                            <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                            <div className="font-semibold text-foreground">{stat.label}</div>
                            {stat.sub && <div className="text-xs text-secondary mt-1">{stat.sub}</div>}
                        </div>
                    ))}
                </div>

                {/* Detailed Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((item, index) => (
                        <div key={index} className="card p-8 flex gap-6 items-start hover:shadow-lg transition-shadow">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${item.color} text-xl`}>
                                <item.icon />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-secondary mb-4 leading-relaxed">
                                    {item.desc}
                                </p>
                                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                                    {item.meta}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
