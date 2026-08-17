import { useState } from 'react';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simple state-based routing
  if (currentPage === 'about') {
    return <AboutPage currentPage={currentPage} onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'services') {
    return <ServicesPage currentPage={currentPage} onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'contact') {
    return <ContactPage currentPage={currentPage} onNavigate={setCurrentPage} />;
  }
  if (currentPage === 'privacy') {
    return <PrivacyPolicyPage currentPage={currentPage} onNavigate={setCurrentPage} />;
  }

  // Default to Home page
  return <HomePage currentPage={currentPage} onNavigate={setCurrentPage} />;
}