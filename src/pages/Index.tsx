
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">Ω ClauseGuard</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-sm">EN | TR</button>
          <Link to="/#how-it-works" className="text-sm hover:text-gray-600">How It Works</Link>
          <Link to="/#pricing" className="text-sm hover:text-gray-600">Pricing</Link>
          <Link to="/#faq" className="text-sm hover:text-gray-600">FAQ</Link>
          <Link to="/login" className="text-sm hover:text-gray-600">Login</Link>
        </div>
        <button className="hidden md:block border border-black px-4 py-2 rounded-full text-sm hover:bg-black hover:text-white transition-colors">
          Upload Contract
        </button>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center leading-tight">
          Instant Contract Risk Report.
        </h1>
        <p className="mt-6 text-xl text-center max-w-2xl">
          Upload any PDF up to 30 pages and get a lawyer-grade risk list in 60 seconds.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/upload" className="px-8 py-3 bg-black text-white rounded-full text-center hover:opacity-90">
            Get Free Scan
          </Link>
          <Link to="/#pricing" className="px-8 py-3 border border-black rounded-full text-center hover:bg-black hover:text-white transition-colors">
            See Pricing
          </Link>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold">Upload</h3>
            <p className="mt-2 text-gray-600">Upload your contract in PDF format (up to 30 pages).</p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold">AI Analysis</h3>
            <p className="mt-2 text-gray-600">Our AI scans for legal risks and potential issues in your contract.</p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold">Download Report</h3>
            <p className="mt-2 text-gray-600">Get a comprehensive ZIP file with all identified risks and recommendations.</p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to analyze your contract?</h2>
        <Link to="/upload" className="mt-8 inline-block px-8 py-3 bg-black text-white rounded-full text-center hover:opacity-90">
          Get Started Now
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-gray-600">© 2025 ClauseGuard. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
              <Link to="/kvkk" className="text-sm text-gray-600 hover:text-gray-900">KVKK</Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
