
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useI18n } from '@/contexts/i18n-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const UploadPage = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [contractType, setContractType] = useState('rental');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    
    if (uploadedFile) {
      // Check file type
      if (!['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(uploadedFile.type)) {
        setError(t('upload.error') + ' ' + t('upload.dropzone.formats'));
        return;
      }
      
      // Check file size (10MB max)
      if (uploadedFile.size > 10 * 1024 * 1024) {
        setError(t('upload.error') + ' File size must be less than 10MB.');
        return;
      }
      
      setFile(uploadedFile);
      setError(null);
    }
  }, [t]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false
  });

  const handleSubmit = async () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    
    // TODO integrate backend
    // This is a mock API call
    setTimeout(() => {
      const reportId = Math.floor(Math.random() * 10000);
      setIsAnalyzing(false);
      navigate(`/report/${reportId}`);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2">
              {t('upload.title')}
            </h1>
            <p className="text-gray-600 text-center mb-8">
              {t('upload.subtitle')}
            </p>
            
            <div 
              className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-black bg-gray-100' : 'border-gray-300'
              } ${file ? 'bg-gray-50' : ''}`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              
              {file ? (
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-green-500 mb-2" />
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-gray-500">{t('upload.dropzone.text')}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {t('upload.dropzone.formats')}
                  </p>
                </div>
              )}
            </div>
            
            {error && (
              <div className="text-red-500 text-center mb-4">
                {error}
              </div>
            )}
            
            <div className="mb-6">
              <p className="font-medium mb-2">
                {t('upload.contractType.label')}
              </p>
              
              <RadioGroup 
                defaultValue="rental" 
                value={contractType} 
                onValueChange={setContractType}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rental" id="rental" />
                  <Label htmlFor="rental">{t('upload.contractType.rental')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="freelance" id="freelance" />
                  <Label htmlFor="freelance">{t('upload.contractType.freelance')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sales" id="sales" />
                  <Label htmlFor="sales">{t('upload.contractType.sales')}</Label>
                </div>
              </RadioGroup>
            </div>
            
            <Button 
              disabled={!file || isAnalyzing} 
              onClick={handleSubmit}
              className="w-full bg-black text-white hover:opacity-90"
            >
              {isAnalyzing ? t('upload.analyzing') : t('upload.scanButton')}
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadPage;
