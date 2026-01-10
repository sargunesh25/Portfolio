'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />

      {/* Contact / Footer Section */}
      <section id="contact" className="bg-white rounded-none md:rounded-[2.5rem] py-16 px-6 md:px-12">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Let's work together
            </h2>
            <p className="text-gray-500 text-base">
              Have a project in mind? Fill out the form below.
            </p>
          </div>

          <form className="space-y-3">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email</label>
              <input type="email" id="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</label>
              <textarea id="message" rows={4} placeholder="Tell me about your project" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white font-bold text-base py-3.5 rounded-full hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
              Send Message
            </button>
          </form>

          <div className="pt-6 flex justify-center gap-5">
            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sargunesh2507/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="mailto:sargunesh2507@gmail.com" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300">
              <FaEnvelope size={18} />
            </a>
          </div>

          <div className="text-center text-sm text-gray-400 font-medium pt-6 border-t border-gray-100">
            &copy; {new Date().getFullYear()} Sargunesh. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
