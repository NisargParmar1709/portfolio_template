import { useEffect } from 'react';
import { ExternalLink, Code, GitBranch } from 'lucide-react';
import { GitHub } from "react-feather";
import { motion } from "framer-motion";

export function DevProjects() {
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

    const projects = [
        {
            title: "Speed Guard : API Rate limiter library",
            description: "Express.js based conversational API rate limiter library",
            stack: ["Express.js", "Node.js", "API", "Middleware"],
            repo: "https://github.com/NisargParmar1709/rate_limiter",
            demo: "https://nisargparmar.netlify.app/",
            coverImage: "/images/rate_limiter_project.jpg",
            status: "inactive",
            deployed: false
        },
        {
            title: "Personal Portfolio template",
            description: "nothing",
            stack: ["React.js", "Tailwind CSS", "Typescript", "Shadcn ui"],
            repo: "https://github.com/NisargParmar1709/portfolio",
            demo: "",
            coverImage: "/images/portfolio_project.png",
            status: "active",
            deployed: true
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <Code className="inline-block mr-3 h-8 w-8 text-purple-500" />
                Dev Projects
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative bg-gray-800 rounded-lg shadow-2xl overflow-hidden hover:shadow-purple-500/20 transition-shadow"
                    >
                        {/* Browser Window Header */}
                        <div className="flex items-center px-4 py-2 bg-gray-700 border-b border-gray-600">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 text-center text-sm text-gray-300">
                                {project.demo || "No Live Demo"} • {project.status}
                            </div>
                        </div>

                        {/* Project Preview Area */}
                        <div className="relative aspect-video bg-gray-900 p-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                            <div className="relative z-10 h-full flex items-center justify-center">
                                {project.coverImage ? (
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={project.coverImage}
                                        alt={project.title}
                                    />
                                ) : (
                                    <p className="text-gray-400">No Image Available</p>
                                )}
                            </div>
                        </div>


                        {/* Terminal Interface */}
                        <div className="p-6 font-mono bg-black/50">
                            <div className="mb-4 text-green-500">
                                <span className="text-purple-500">$</span> npm run dev
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center text-gray-400">
                                    <GitBranch className="h-4 w-4 mr-2 text-purple-500" />
                                    <span>main</span>
                                    <span className="mx-2">•</span>
                                    <span className={project.deployed ? "text-green-500" : "text-red-500"}>{project.deployed ? "▲ Deployed" : "Not Deployed"}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-gray-800 rounded-md text-gray-300 text-xs"
                                        >
                                            <span className="text-purple-500">#</span>{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex gap-4 border-t border-gray-800 pt-4">
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GitHub className="h-4 w-4" />
                                        Source Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
