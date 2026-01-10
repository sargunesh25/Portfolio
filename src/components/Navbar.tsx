'use client';
import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];



const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
                {/* Left: Email Pill */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex px-5 py-2 rounded-full text-xs md:text-sm font-medium bg-gray-100 text-gray-900 items-center cursor-default">
                        {"SARGUNESH".split("").map((char, index) => (
                            <span
                                key={index}
                                className="animate-wind inline-block"
                                style={{ animationDelay: `${index * 30}ms` }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                    <a href="https://resume2507.s3.us-east-1.amazonaws.com/Resume.%20%281%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAVGOQ4PTRZW5QO6VA%2F20260110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260110T052602Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGM1Y83sWtfgh9oDNRLSgQqD1fZf8JIzJo88T4tCNkmSAiEAi%2Bzj%2FyIlhh38EkyNqLEJHVjeB5gD%2FDSVlD0P7FqKzXIq3wIIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwzNTc0NTcyMzEwNzUiDPgzuC4GOOCRwxvRyyqzAm71RjNPJdn8pPOPK1PDINvTK0GAqYvWl83WJrnGqid6sd6nVwAkNZtvt5MwEXjoide1zrFSZs18AgJnhkMYF8nS5Oqbf8OyzKyEvFEd6gH9ssbFs7CGINaWyAdUY4sc7%2BT4yAlyji7e5X8eONwXrFykqO1oORDzlLBPvV55vcp7AJHG21HUrP80GJuv5nbDzO%2B7jpHEOaEDGDKHZ4qjZqCPRpQ%2FOa%2FdM2nK7u0Go%2Bha9Ar7rV5RUZC1OVLcBf%2Fa8wBRSi2GdNNoLYgqd%2Bbt5dB%2Bs%2FIhIC6OAFcQ%2FFiYSyIbcEE3YyodnEy%2BRCq0Nc%2BjOKy5st%2B5WGN93g1qF4QqSolBktgbBW7EuVoBEF5kvQfpuFJD%2BHbbTzHuG24ZupPmydIo7xuADx%2BPR9hAZLZ1d4Mg4cswh8KHywY6rQJ9p2B7L%2FblvieTk09CyTehMAnJec18oS7BtSXBppQSQvMcbwR%2BzcpwOErXKy1rqMdrIqSJ%2FxQAOQzKYqeDoKPS%2Ft3iLaFcj21DUa00M1TwpokvwysCooMr1eUJk%2BKsgZNNu%2BpqN3nPGNdxXzxmxEf2bTDmT8k1drbtQr5mAYXU1w7qdlr52cfMBs3mRxXFQloRYycwe6r%2BC906y0MwFKlZ1785dV92seQEFix%2B%2FX9of5Oj59hv8BUM9ZrKC8jqJX0pGHujX71mfav6UJ9PXFGZxyuy7n5KYqqeN%2F3NmpDXlZjefka0Qy03I8oHfVlRfchCmEVpU9KXP64rpt4ALDfNBLhW4Ikp3KeXZAvcPXWYVThm1a%2BGZJQfQvO%2F%2Fqujlk%2BVXOMeeX%2BQwPRNMRk4&X-Amz-Signature=ac944bab25ea74710105983cba73467d7ab67f0cd8873860ee72bfa8ad40e5cf&X-Amz-SignedHeaders=host&response-content-disposition=inline" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-50 transition-all duration-300">
                        <div className="flex items-center justify-center w-6 h-6 border border-black rounded">
                            <HiDownload size={12} />
                        </div>
                        <span>Resume</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors"
                >
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center justify-center gap-2">
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

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-6 right-6 mt-2 p-6 bg-white rounded-3xl shadow-xl border border-gray-100 md:hidden flex flex-col items-center space-y-6 animate-in slide-in-from-top-4 fade-in duration-200">
                    <ul className="flex flex-col items-center gap-4 w-full">
                        {navLinks.map((link) => (
                            <li key={link.name} className="w-full text-center">
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block w-full py-3 rounded-xl text-lg font-medium text-gray-900 hover:bg-gray-50 transition-all"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-full h-px bg-gray-100" />
                    <div className="flex items-center justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/sargunesh2507/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                        <a
                            href="https://github.com/sargunesh25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
