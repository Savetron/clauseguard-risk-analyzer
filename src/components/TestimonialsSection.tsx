
import React from 'react';
import { useI18n } from '@/contexts/i18n-context';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const TestimonialsSection = () => {
  const { t } = useI18n();
  
  const testimonials = t('testimonials.reviews');

  return (
    <div className="container mx-auto px-6 py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
      
      <div className="max-w-4xl mx-auto">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                  
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
