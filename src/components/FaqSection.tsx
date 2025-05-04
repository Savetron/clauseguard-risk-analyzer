
import React from 'react';
import { useI18n } from '@/contexts/i18n-context';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqSection = () => {
  const { t } = useI18n();
  
  const faqItems = t('faq.questions');

  return (
    <div id="faq" className="container mx-auto px-6 py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">{t('faq.title')}</h2>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FaqSection;
