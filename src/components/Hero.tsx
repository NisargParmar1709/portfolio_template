import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {

    const technologies = [
        { name: "Python", logo: "/images/python.png" },
        { name: "Flask", logo: "/images/flask.png" },
        { name: "JavaScript", logo: "/images/javascript.png" },
        { name: "Express.js", logo: "/images/express-js.png" },
        { name: "Mongo DB", logo: "/images/mongodb.png" },
        { name: "Redis", logo: "/images/redis.png" },
        { name: "Mysql", logo: "/images/mysql.png" },
        { name: "Selenium", logo: "/images/selenium.png" },
    ];

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



    return (
        <div>
            {/* Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
                <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Main Content */}
            <div className="text-center space-y-6 max-w-3xl mx-auto relative z-10">
                {/* Name and Tagline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                    Nisarg Parmar
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300"
                >
                    Aspiring Software Developer | Backend Enthusiast
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg text-gray-400"
                >
                    Building beautiful, functional, and accessible web experiences
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-4 justify-center"
                >
                    <Button variant="outline" size="lg" className="hover:bg-purple-500 hover:text-white transition-all">
                        <a href="#projects">View Projects</a>
                    </Button>
                    <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all">
                        <a href="https://www.linkedin.com/in/nisarg-parmar-0a714b27a/">Get in Touch</a>
                    </Button>
                </motion.div>

                {/* Tech Stack Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="hidden md:grid mt-12 grid-cols-4 md:grid-cols-8 gap-4"
                >
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-700/30 hover:border-purple-500 transition-all duration-300 group"
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-10 h-10 mx-auto object-contain group-hover:scale-110 transition-transform"
                            />
                            <p className="mt-2 text-xs text-gray-300 text-center">{tech.name}</p>
                        </div>
                    ))}
                </motion.div>
                <p><a target="_blank" href="https://icons8.com">Tech</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
            </div>
        </div>
    )
}