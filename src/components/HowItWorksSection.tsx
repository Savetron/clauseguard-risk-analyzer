
import React from 'react';
import { useI18n } from '@/contexts/i18n-context';
import { Upload, FileSearch, FileText } from 'lucide-react';

const HowItWorksSection = () => {
  const { t } = useI18n();

  const steps = [
    {
      icon: <Upload size={56} />,
      title: t('howItWorks.steps.upload.title'),
      description: t('howItWorks.steps.upload.description'),
    },
    {
      icon: <FileSearch size={56} />,
      title: t('howItWorks.steps.analyze.title'),
      description: t('howItWorks.steps.analyze.description'),
    },
    {
      icon: <FileText size={56} />,
      title: t('howItWorks.steps.download.title'),
      description: t('howItWorks.steps.download.description'),
    },
  ];

  return (
    <div id="how-it-works" className="container mx-auto px-6 py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-12">{t('howItWorks.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md"
          >
            <div className="flex justify-center mb-6">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-center mb-3">{step.title}</h3>
            <p className="text-center text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
