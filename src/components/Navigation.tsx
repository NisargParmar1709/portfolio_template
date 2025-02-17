import { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Download, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'techtoolkit', 'projects', 'awards', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleLinkClick = (section: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-gray-700/30">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          NP
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },            // First impression of the site
            { id: 'about', label: 'About' },          // Who you are
            { id: 'education', label: 'Education' },  // Academic background (before projects)
            { id: 'techtoolkit', label: 'Tech Arsenal' },  // Skills & Technologies
            { id: 'projects', label: 'Projects' },    // Showcasing work
            { id: 'awards', label: 'Awards' },        // Recognitions & certifications
            { id: 'contact', label: 'Contact' }       // Last step for engagement
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`relative hover:text-purple-500 transition-colors ${activeSection === link.id ? 'text-purple-500' : 'text-gray-300'
                }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-purple-500 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-gray-700/30">
          <div className="flex flex-col items-center gap-4 py-4">
            {[
              { id: 'home', label: 'Home' },            // First impression of the site
              { id: 'about', label: 'About' },          // Who you are
              { id: 'education', label: 'Education' },  // Academic background (before projects)
              { id: 'techtoolkit', label: 'Tech Arsenal' },  // Skills & Technologies
              { id: 'projects', label: 'Projects' },    // Showcasing work
              { id: 'awards', label: 'Awards' },        // Recognitions & certifications
              { id: 'contact', label: 'Contact' }       // Last step for engagement
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 text-lg ${activeSection === link.id
                    ? 'text-purple-500'
                    : 'text-gray-300 hover:text-purple-500'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mt-2 hover:bg-purple-500 hover:text-white transition-all"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}