import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
           <img
  src="https://raw.githubusercontent.com/Pavan01Mamindla/portfolio-assets/main/pavan-portfolio.jpg"
  alt="Mamindla Pavan"
  className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-xl border-4 border-white"
/>



          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Welcome to My Portfolio</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Hi, I'm Mamindla Pavan - Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications. 
            Fresh graduate with strong foundation in modern technologies and 
            eager to contribute to innovative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </button>
            
            <a 
              href="/resume.pdf" 
              download="Mamindla-Pavan-Resume.pdf"
              className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/Pavan01Mamindla" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mamindla-pavan-b9a6a8228/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pavanmamindla1@gmail.com" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;