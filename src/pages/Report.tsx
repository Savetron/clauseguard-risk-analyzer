
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useI18n } from '@/contexts/i18n-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FileText, FileSpreadsheet, Archive } from 'lucide-react';

// Mock data
const mockRisks = [
  { 
    id: 1, 
    severity: 'high',
    title: 'No clear termination clause',
    description: 'Contract lacks specific conditions for termination by either party.',
    clause: 'Section 8.1'
  },
  { 
    id: 2, 
    severity: 'high',
    title: 'Payment terms ambiguous',
    description: 'Payment schedule and method are not clearly defined.',
    clause: 'Section 4.2'
  },
  { 
    id: 3, 
    severity: 'medium',
    title: 'Liability cap missing',
    description: 'No maximum liability amount is specified.',
    clause: 'Section 11'
  },
  { 
    id: 4, 
    severity: 'medium',
    title: 'Confidentiality period undefined',
    description: 'The duration of confidentiality obligations is not specified.',
    clause: 'Section 6.3'
  },
  { 
    id: 5, 
    severity: 'low',
    title: 'Governing law ambiguous',
    description: 'The governing law clause doesn't specify jurisdiction clearly.',
    clause: 'Section 14.1'
  }
];

const ReportPage = () => {
  const { t } = useI18n();
  const { id } = useParams<{ id: string }>();
  const [pdfLoaded, setPdfLoaded] = useState(true);
  
  // Mock metrics
  const metrics = {
    pages: 12,
    highRisk: mockRisks.filter(r => r.severity === 'high').length,
    mediumRisk: mockRisks.filter(r => r.severity === 'medium').length,
    lowRisk: mockRisks.filter(r => r.severity === 'low').length,
  };

  const handleDownload = (format: string) => {
    // TODO integrate backend
    console.log(`Downloading ${format} for report ${id}`);
    alert(`Downloading ${format} report (ID: ${id})`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-8">
            {t('report.title')} #{id}
          </h1>
          
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            {/* Left column - PDF Viewer */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden min-h-[600px]">
              {pdfLoaded ? (
                <div className="h-full w-full bg-gray-100 flex items-center justify-center p-4">
                  <div className="p-8 text-center">
                    <FileText size={48} className="mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-500">
                      PDF Viewer would be integrated here
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex items-center justify-center p-4">
                  <p>Loading document...</p>
                </div>
              )}
            </div>
            
            {/* Right column - Risk analysis */}
            <div className="space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="text-sm text-gray-500">{t('report.metrics.pages')}</p>
                  <p className="text-2xl font-bold">{metrics.pages}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border-l-4 border-red-500">
                  <p className="text-sm text-gray-500">{t('report.metrics.highRisk')}</p>
                  <p className="text-2xl font-bold">{metrics.highRisk}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border-l-4 border-yellow-500">
                  <p className="text-sm text-gray-500">{t('report.metrics.mediumRisk')}</p>
                  <p className="text-2xl font-bold">{metrics.mediumRisk}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center border-l-4 border-green-500">
                  <p className="text-sm text-gray-500">{t('report.metrics.lowRisk')}</p>
                  <p className="text-2xl font-bold">{metrics.lowRisk}</p>
                </div>
              </div>
              
              {/* Risk list */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold mb-4">{t('report.riskList')}</h3>
                <Accordion type="multiple" className="w-full">
                  {mockRisks.map((risk) => (
                    <AccordionItem key={risk.id} value={`risk-${risk.id}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center">
                          <span 
                            className={`w-3 h-3 rounded-full mr-2 
                              ${risk.severity === 'high' ? 'bg-red-500' : 
                                risk.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`} 
                          />
                          {risk.title} ({risk.clause})
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{risk.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              {/* Download buttons */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => handleDownload('word')} 
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  <FileText size={18} />
                  {t('report.download.word')}
                </Button>
                <Button 
                  onClick={() => handleDownload('excel')} 
                  className="flex items-center gap-2"
                  variant="outline"
                >
                  <FileSpreadsheet size={18} />
                  {t('report.download.excel')}
                </Button>
                <Button 
                  onClick={() => handleDownload('zip')} 
                  className="flex items-center gap-2 bg-black text-white hover:opacity-90"
                >
                  <Archive size={18} />
                  {t('report.download.zip')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReportPage;
