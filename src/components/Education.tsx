import { useRef } from 'react';
import { Calendar } from 'lucide-react';
import { BookOpen } from "react-feather";
import { motion, useInView } from "framer-motion";

export function Education() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const educationData = [
        {
            year: "2022 - Present",
            degree: "Diploma of Computer Engineering",
            institution: "Government Polytechnic Jamnagar",
            description: "Specializing in AI/ML and Full-Stack Development.\n CGPA: 9.62/10.00",
            courses: ["Data Structures", "Algorithms", "Database Systems", "C/C++", "HTML", "CSS", "JAVA"],
            logo: "/images/goverment_polytechnic_logo.jpeg"
        },
        {
            year: "2020 - 2022",
            degree: "Higher Secondary School",
            institution: "Brillient Group of Schools",
            description: "Focus on Science and Mathematics.",
            courses: ["Physics", "Chemistry", "Maths"],
            logo: "/images/brillent_school_logo.jpg"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <BookOpen className="inline-block mr-3 h-8 w-8 text-purple-500" />
                Education Journey
            </h2>

            <div className="relative" ref={ref}>
                {/* Timeline line */}
                <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 transform -translate-x-1/2"></div>

                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`mb-12 w-full ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                        <div className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}>
                            {/* Timeline node - Hidden on small screens */}
                            <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping"></div>
                            </div>


                            {/* Content card */}
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-4" : "md:pl-4"} text-center md:text-left mx-auto`}>
                                <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-purple-500 transition-all duration-300 group">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 p-1">
                                            <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                                            <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                                <Calendar className="h-4 w-4" />
                                                <span>{edu.year}</span>
                                            </div>
                                            <p className="text-gray-300 text-sm mb-3">{edu.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.courses.map((course, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                                                    >
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Year display */}
                            <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-left pl-8" : "text-right pr-8"}`}>
                                <motion.div
                                    initial={{ x: index % 2 === 0 ? 50 : -50 }}
                                    animate={isInView ? { x: 0 } : {}}
                                    className="text-2xl font-bold text-purple-500 bg-gray-800/50 px-4 py-2 rounded-lg inline-block"
                                >
                                    {edu.year}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}