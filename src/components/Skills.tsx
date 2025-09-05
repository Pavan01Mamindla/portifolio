import React from 'react';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      color: 'blue'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Vite', 'Codesandboc'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700',
      green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I've learned and worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(({ icon: Icon, title, skills, color }) => (
            <div key={title} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
              
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(color)}`}></div>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Node.js', 'AWS', 'Machine Learning', 'MongoDB', 'PostgreSQL'].map((skill) => (
              <span key={skill} className="px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;