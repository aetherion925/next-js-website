'use client';

import { useState, useEffect } from 'react';

export default function About() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    successRate: 0,
  });

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const targets = { projects: 100, clients: 50, experience: 5, successRate: 99 };
      
      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets];
        const increment = target / (duration / 50);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          setStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 50);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Aetherion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses through innovative technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To connect clients with skilled developers who can bring their ideas to life. 
                We focus on delivering high-quality, scalable software that meets unique business needs. 
                Through collaboration, innovation, and a commitment to excellence, we aim to turn every 
                project into a success story.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Reliable and long-term support',
                  'Modern, creative technologies',
                  'Simplifying processes, driving success',
                  'Expertise powered by collaboration',
                  'Building lasting digital value',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-[#3b4476] rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-[#3b4476] mb-2">{stats.projects}+</h3>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-[#3b4476] mb-2">{stats.clients}+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-[#3b4476] mb-2">{stats.experience}+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold text-[#3b4476] mb-2">{stats.successRate}%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}