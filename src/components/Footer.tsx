import { useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* About Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">About Me</h3>
                    <p className="text-gray-400">
                        I'm Nisarg Parmar, an aspiring software developer passionate about building scalable and innovative solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-gray-400 hover:text-purple-500 transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* LinkedIn Follow Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        Follow Me on LinkedIn
                    </h3>
                    <p className="text-gray-400">
                        Connect with me for updates on new projects, articles, and professional insights.
                    </p>
                    <button className="w-full md:w-auto rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all">
                        <a
                            href="https://www.linkedin.com/in/nisarg-parmar-0a714b27a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.07v5.59h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.03 0 3.6 1.99 3.6 4.58v5.62z" />
                            </svg>
                            Follow
                        </a>
                    </button>

                </div>

                {/* Social Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Connect</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/NisargParmar1709"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            <Github className="h-5 w-5 text-gray-300" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nisarg-parmar-0a714b27a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            <Linkedin className="h-5 w-5 text-gray-300" />
                        </a>
                        <a
                            href="mailto:nisargmparmar1709@gmail.com"
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                            <Mail className="h-5 w-5 text-gray-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright and Back-to-Top */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © 2025 Nisarg Parmar. All rights reserved.
                </p>
                <button
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
                >
                    <span>Back to Top</span>
                    <ArrowUp className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}