import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, CpuIcon, Database, Terminal } from "lucide-react";
import { SiJavascript, SiPython, SiCplusplus, SiPostgresql, SiMongodb, SiReact, SiNodedotjs, SiExpress, SiDjango, SiEslint, SiPostman, SiFlask, SiFastapi, SiJetbrains } from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaJava, FaGithub } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export function TechToolkit() {

    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Detects small screens
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const categories = [
        {
            title: "Core Languages",
            icon: <Code className="h-6 w-6" />,
            color: "from-purple-500 to-blue-500",
            items: [
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Java", icon: <FaJava /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "PHP", icon: <FaPhp /> },
                { name: "SQL", icon: <GrMysql /> },
            ],
        },
        {
            title: "Frameworks",
            icon: <CpuIcon className="h-6 w-6" />,
            color: "from-green-500 to-cyan-500",
            items: [
                { name: "React", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "Fast API", icon: <SiFastapi />},
                { name: "Django", icon: <SiDjango /> },
            ],
        },
        {
            title: "Databases",
            icon: <Database className="h-6 w-6" />,
            color: "from-pink-500 to-purple-500",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Redis", icon: <DiRedis /> },
            ],
        },
        {
            title: "Tooling",
            icon: <Terminal className="h-6 w-6" />,
            color: "from-yellow-500 to-amber-500",
            items: [
                { name: "VS Code", icon: <VscVscode /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Github", icon: <FaGithub /> },
                { name: "Jet brain", icon: <SiJetbrains /> },
                { name: "Jupiter", icon: <SiEslint /> },
            ],
        },
    ];

    // Controls number of categories shown on mobile
    const visibleCategories = isMobile ? (showMore ? categories : categories.slice(0, 2)) : categories;

    return (
        <section id="tech-stack" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-8 text-white"
                >
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Tech Arsenal
                    </span>
                </motion.h2>

                {/* Grid of Tech Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30 hover:border-transparent transition-all duration-300"
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    {category.items.map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:text-white transition-all"
                                        >
                                            <span className="text-lg">{tech.icon}</span>
                                            <span>{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "Show More" Button - Visible Only on Mobile */}
                {isMobile && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
