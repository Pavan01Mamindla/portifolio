import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Jawaharlal Nehru Technological University HYderabad',
      location: 'Hyderabad',
      period: '2019 - 2023',
      gpa: '6.38',
      description: 'Specialized in Software Engineering and Web Development. Active member of the Computer Science Club and participated in multiple hackathons.',
      achievements: ['Dean\'s List - 3 semesters', 'Best Final Year Project Award', 'Programming Competition Winner']
    },
    {
      degree: 'Intermediate',
      institution: 'Sai shivani junior college',
      location: 'Warangal',
      period: '2017 - 2019',
      gpa: '8.38',
      description: 'Focused on Mathematics and Science subjects. President of the Computer Club and organized coding workshops for junior students.',
      achievements: ['Valedictorian','Science Fair Winner']
    }
  ];

  const certifications = [
    {
      name: 'Web development',
      issuer: 'Teachnook',
      date: '2022',
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2024'
    },
    {
      name: 'Data science',
      issuer: 'Pantech e Learning Pvt Ltd',
      date: '2022'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-lg text-blue-600 font-semibold mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-sm space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-blue-600" size={28} />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                      <p className="text-blue-600 font-semibold text-sm mb-1">{cert.issuer}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={12} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-dashed border-blue-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-blue-800 font-semibold mb-1">Currently Pursuing</p>
                  <p className="text-blue-600 text-sm">Full Stack Web Development at UDEMY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;