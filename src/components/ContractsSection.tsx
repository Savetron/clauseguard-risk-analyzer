
import React from 'react';
import { useI18n } from '@/contexts/i18n-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ContractsSection = () => {
  const { t } = useI18n();

  return (
    <div className="container mx-auto px-6 py-24 lg:py-32 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">{t('contracts.title')}</h2>
      
      <Tabs defaultValue="rental" className="max-w-3xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="rental">{t('contracts.tabs.rental')}</TabsTrigger>
          <TabsTrigger value="freelance">{t('contracts.tabs.freelance')}</TabsTrigger>
          <TabsTrigger value="sales">{t('contracts.tabs.sales')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rental" className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc pl-5 space-y-2">
            {t('contracts.examples.rental').map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </TabsContent>
        
        <TabsContent value="freelance" className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc pl-5 space-y-2">
            {t('contracts.examples.freelance').map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </TabsContent>
        
        <TabsContent value="sales" className="bg-white p-6 rounded-lg shadow-sm">
          <ul className="list-disc pl-5 space-y-2">
            {t('contracts.examples.sales').map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContractsSection;
