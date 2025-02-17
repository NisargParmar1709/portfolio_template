import React, { useEffect, useRef, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Use React.lazy with a .then() to extract the named export as default.
const Navigation = React.lazy(() =>
  import('@/components/Navigation').then(module => ({ default: module.Navigation }))
);
const Hero = React.lazy(() =>
  import('@/components/Hero').then(module => ({ default: module.Hero }))
);
const TechToolkit = React.lazy(() =>
  import('@/components/TechToolkit').then(module => ({ default: module.TechToolkit }))
)
const Terminal = React.lazy(() =>
  import('@/components/Terminal').then(module => ({ default: module.Terminal }))
);
const Awards = React.lazy(() =>
  import('@/components/Awards').then(module => ({ default: module.Awards }))
);
const Education = React.lazy(() =>
  import('@/components/Education').then(module => ({ default: module.Education }))
);
const DevProjects = React.lazy(() =>
  import('@/components/DevProjects').then(module => ({ default: module.DevProjects }))
);
const Contact = React.lazy(() =>
  import('@/components/Contact').then(module => ({ default: module.Contact }))
);
const Footer = React.lazy(() =>
  import('@/components/Footer').then(module => ({ default: module.Footer }))
);

const SkeletonLoader = () => (
  <div className="min-h-screen bg-gray-900">
    {/* Navigation Skeleton */}
    <div className="fixed w-full z-50 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="h-8 w-8 bg-gray-700 rounded-full animate-pulse" />
        <div className="hidden md:flex items-center gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 w-16 bg-gray-700 rounded animate-pulse" />
          ))}
        </div>
        <div className="h-8 w-8 bg-gray-700 rounded-full animate-pulse md:hidden" />
      </div>
    </div>

    {/* Hero Section Skeleton */}
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Main Content Skeleton */}
      <div className="text-center space-y-6 max-w-3xl mx-auto relative z-10">
        {/* Name and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-16 w-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg mx-auto animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-6 w-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg mx-auto animate-pulse"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-4 w-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg mx-auto animate-pulse"
        />

        {/* Buttons Skeleton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <div className="h-12 w-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
          <div className="h-12 w-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg animate-pulse" />
        </motion.div>

        {/* Tech Stack Logos Skeleton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden md:grid mt-12 grid-cols-4 md:grid-cols-8 gap-4"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="p-3 bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-700/30 animate-pulse"
            >
              <div className="h-10 w-10 bg-gray-700 rounded-full mx-auto" />
              <div className="h-4 w-16 bg-gray-700 rounded-lg mt-2 mx-auto" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Button Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 animate-bounce"
      >
        <div className="h-8 w-8 bg-purple-500/20 rounded-full animate-pulse" />
      </motion.div>
    </div>
  </div>
);


function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Instead of a fixed timer, preload all major components in the background.
  useEffect(() => {
    Promise.all([
      import('@/components/Navigation'),
      import('@/components/Hero'),
      import('@/components/Terminal'),
      import('@/components/TechToolkit')
    ]).then(() => {
      setIsLoading(false);
    });
  }, []);

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

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Suspense fallback={<SkeletonLoader />}>
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
          <Navigation />
        </nav>

        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
          <Hero />
          {/* Scroll Down Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToAbout}
            className="absolute bottom-8 animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-8 w-8 text-purple-500" />
          </motion.button>
        </section>

        <section ref={aboutRef} id="about" className="py-20 px-4">
          <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse rounded-xl" />}>
            <Terminal />
          </Suspense>
        </section>

      </Suspense>

      <section id="education" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse rounded-xl" />}>
          <Education />
        </Suspense>
      </section>

      <section id="techtoolkit" className="py-20 px-4">
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse rounded-xl" />}>
          <TechToolkit />
        </Suspense>
      </section>

      <section id="projects" className="py-20 px-4 bg-black-900">
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse rounded-xl" />}>
          <DevProjects />
        </Suspense>
      </section>

      <section id="awards" className="py-20 px-4 relative overflow-hidden bg-gray-900">
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse rounded-xl" />}>
          <Awards />
        </Suspense>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-900/50 backdrop-blur-md">
        <Suspense fallback={<div className="h-96 bg-gray-900 animate-pulse rounded-xl" />}>
          <Contact />
        </Suspense>
      </section>

      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <Suspense fallback={<div className="h-40 bg-gray-900 animate-pulse rounded-xl" />}>
          <Footer />
        </Suspense>
      </footer>

    </div>
  );
}

export default App;