
import React, { useState } from 'react';
import { useI18n } from '@/contexts/i18n-context';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const PricingSection = () => {
  const { t } = useI18n();
  const [isUSD, setIsUSD] = useState(false);
  
  const currency = isUSD ? 'USD' : 'TL';
  
  const pricingPlans = [
    {
      name: t('pricing.plans.free.name'),
      price: '0',
      description: t('pricing.plans.free.description'),
      features: t('pricing.plans.free.features'),
      cta: t('pricing.plans.free.cta'),
    },
    {
      name: t('pricing.plans.pro.name'),
      price: isUSD ? '19.99' : '149',
      period: t('pricing.plans.pro.period'),
      description: t('pricing.plans.pro.description'),
      features: t('pricing.plans.pro.features'),
      cta: t('pricing.plans.pro.cta'),
      highlighted: true,
    },
    {
      name: t('pricing.plans.once.name'),
      price: isUSD ? '9.99' : '79',
      description: t('pricing.plans.once.description'),
      features: t('pricing.plans.once.features'),
      cta: t('pricing.plans.once.cta'),
    },
  ];

  return (
    <div id="pricing" className="container mx-auto px-6 py-24 lg:py-32 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">{t('pricing.title')}</h2>
      
      <div className="flex items-center justify-center space-x-4 mb-12">
        <span className={`text-sm ${!isUSD ? 'font-bold' : ''}`}>TL</span>
        <Switch 
          checked={isUSD}
          onCheckedChange={setIsUSD}
        />
        <span className={`text-sm ${isUSD ? 'font-bold' : ''}`}>USD</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-8 flex flex-col ${
              plan.highlighted ? 'ring-2 ring-black' : ''
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-4 flex items-end">
              <span className="text-4xl font-bold">
                {currency} {plan.price}
              </span>
              {plan.period && <span className="ml-1 text-gray-500">{plan.period}</span>}
            </div>
            
            <p className="text-gray-600 mb-6">{plan.description}</p>
            
            <div className="flex-grow">
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              to="/upload"
              className={`w-full py-2 rounded-full text-center ${
                plan.highlighted
                  ? 'bg-black text-white hover:opacity-90'
                  : 'border border-black hover:bg-black hover:text-white transition-colors'
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
