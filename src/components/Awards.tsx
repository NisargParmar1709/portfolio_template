import { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, ChevronRight, ChevronLeft, Cloud, Monitor, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Awards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCertificate, setShowCertificate] = useState(false);

  const certifications = [
    {
      title: "Half Hackathon 2025",
      organization: "Rajkot Information Technology Association",
      date: "2025",
      type: "Participation",
      description: "A certification for participation in Half Hackathon 2025",
      skills: ["Team Leadership", "Project Management", "Security", "Scalability"],
      validity: "Lifetime",
      credentialId: "N/A",
      status: "Active",
      icon: <Cloud className="w-6 h-6" />,
      certificateImage: "/images/RITA_certification.jpg"
    },
    {
      title: "Certification of Participation",
      organization: "S.F.S EDU EXPO",
      date: "2025",
      type: "Participation",
      description: "A certification for event participation and contribution",
      skills: ["HTML", "Express.js", "Redis", "Scalability"],
      validity: "Lifetime",
      credentialId: "N/A",
      status: "Active",
      icon: <Monitor className="w-6 h-6" />,
      certificateImage: "/images/sfsEduCertification.jpg"
    },
  ];

  const nextCertificate = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Certificate Modal */}
      {showCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setShowCertificate(false)}
        >
          <div className="relative max-w-4xl w-full bg-gray-800 rounded-2xl shadow-xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute -top-8 right-0 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-4 bg-white rounded-lg m-2">
              <img
                src={certifications[activeIndex].certificateImage}
                alt="Certificate"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex justify-center gap-4 p-4 border-t border-gray-700">
              <a
                href={certifications[activeIndex].certificateImage}
                download
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-purple-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Achievements & Certifications
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognitions and certifications showcasing technical expertise and community involvement
          </p>
        </div>

        {/* Main Certificate Display */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevCertificate}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-white z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextCertificate}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 text-white z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Certificate Card */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/30 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-8">
              {/* Left Column - Certificate Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                    {certifications[activeIndex].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {certifications[activeIndex].title}
                    </h3>
                    <p className="text-gray-400">
                      {certifications[activeIndex].organization}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {certifications[activeIndex].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {certifications[activeIndex].skills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      initial={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right Column - Certificate Details */}
              <div className="bg-gray-900/50 rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 pb-4 border-b border-gray-700">
                    <span className="text-gray-400">Credential ID</span>
                    <span className="block text-white font-mono mt-1">
                      {certifications[activeIndex].credentialId}
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-gray-400">Issue Date</span>
                    <div className="flex items-center gap-2 text-white">
                      <Calendar className="w-4 h-4" />
                      {certifications[activeIndex].date}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-gray-400">Validity</span>
                    <span className="block text-white">
                      {certifications[activeIndex].validity}
                    </span>
                  </div>

                  <div className="col-span-2 pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Status</span>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle className="w-4 h-4" />
                        {certifications[activeIndex].status}
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowCertificate(true)}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all group"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-purple-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}