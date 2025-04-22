import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Denis Gorshkov"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-blue-600 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-2">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <h3 className="text-2xl font-semibold mb-4">
              Web Developer & Designer with over 8 years of experience
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm Denis Gorshkov, a passionate web developer and designer based in Moscow, Russia. 
              I specialize in creating modern, responsive websites and applications that not only look 
              great but also deliver exceptional user experiences. With expertise in both frontend and 
              backend development, I offer comprehensive solutions for businesses of all sizes.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              My approach combines technical excellence with creative design thinking, ensuring that 
              every project I work on is not just functional but also visually appealing and aligned 
              with the client's brand identity. I believe in collaboration, clear communication, and 
              delivering results that exceed expectations.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600 h-5 w-5" />
                <span className="text-gray-700">Born: 15 April 1989</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600 h-5 w-5" />
                <span className="text-gray-700">Moscow, Russia</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600 h-5 w-5" />
                <span className="text-gray-700">Freelance Available</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-blue-600 h-5 w-5" />
                <span className="text-gray-700">Master's in Computer Science</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;