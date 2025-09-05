import React from 'react';
import { Award, Clock, Users, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '50+', label: 'Hours of Coding' },
    { icon: Target, value: '10+', label: 'Projects Completed' },
    { icon: Users, value: '5+', label: 'Team Collaborations' },
    { icon: Award, value: '3+', label: 'Certifications' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate developer ready to make an impact in the tech industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Working"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Fresh Graduate with Big Dreams
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a recent Computer Science graduate with a passion for creating 
              innovative web solutions. During my academic journey, I've developed 
              strong foundations in programming, web development, and user experience design.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My goal is to contribute to meaningful projects while continuously 
              learning and growing as a developer. I believe in writing clean, 
              efficient code and creating user-centered designs that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center p-4 bg-gray-50 rounded-lg">
                  <Icon className="mx-auto mb-2 text-blue-600" size={24} />
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;