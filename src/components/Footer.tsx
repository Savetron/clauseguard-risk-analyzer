
import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/contexts/i18n-context';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-600">{t('footer.copyright')}</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              {t('footer.links.privacy')}
            </Link>
            <Link to="/kvkk" className="text-sm text-gray-600 hover:text-gray-900">
              {t('footer.links.kvkk')}
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              {t('footer.links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
