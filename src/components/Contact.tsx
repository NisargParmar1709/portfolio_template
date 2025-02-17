import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

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

  const handleContactSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    // In production, Netlify will handle the form submission.
    // Here, we simulate a submission delay.
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage({ type: "success", text: "Your message has been sent!" });
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-purple-500" />
              <span className="text-gray-300">Jamnagar, Gujarat</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-purple-500" />
              <span className="text-gray-300">nisargmparmar1709@gmail.com</span>
            </div>
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

        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleContactSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            {/* Netlify Form Hidden Fields */}  
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Name"
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/30 focus:border-purple-500 focus:scale-[1.02] transition-all"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/30 focus:border-purple-500 focus:scale-[1.02] transition-all"
                required
              />
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700/30 focus:border-purple-500 focus:scale-[1.02] transition-all"
              required
            />
            <Textarea
              name="message"
              placeholder="Message"
              className="min-h-[150px] bg-gray-800/50 backdrop-blur-md border border-gray-700/30 focus:border-purple-500 focus:scale-[1.02] transition-all"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {message.text && (
              <p
                className={`mt-4 text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}
              >
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
