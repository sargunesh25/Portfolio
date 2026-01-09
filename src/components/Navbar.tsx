'use client';
import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];



const Navbar = () => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("sargunesh2507@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left: Email Pill */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleCopy}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                    >
                        {copied ? (
                            <span>Copied!</span>
                        ) : (
                            "sargunesh2507@gmail.com".split("").map((char, index) => (
                                <span
                                    key={index}
                                    className="animate-wind inline-block"
                                    style={{ animationDelay: `${index * 30}ms` }}
                                >
                                    {char}
                                </span>
                            ))
                        )}
                    </button>
                    <a href="/resume.pdf" className="group flex items-center bg-white border border-gray-200 px-5 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-all duration-300 ease-in-out hover:pr-6 hover:pl-4 whitespace-nowrap">
                        <HiDownload className="w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300" />
                        <span className="flex items-center">
                            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[70px] group-hover:opacity-100 transition-all duration-300">Download&nbsp;</span>
                            CV
                        </span>
                    </a>
                </div>

                {/* Right: Socials / Nav (blended) */}
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-px h-4 bg-gray-300 mx-2 hidden md:block" />
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <a
                            href="https://www.linkedin.com/in/sargunesh2507/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                        >
                            LinkedIn
                        </a>
                        <span>/</span>
                        <a
                            href="https://github.com/sargunesh25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
