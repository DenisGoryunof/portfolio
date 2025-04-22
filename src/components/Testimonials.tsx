import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            {/* Testimonial Slider */}
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-sm relative">
                      <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
                      
                      <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white border border-gray-300 rounded-full p-3 hover:bg-gray-50 transition-colors duration-300"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;