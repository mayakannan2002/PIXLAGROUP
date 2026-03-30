import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions'; // Import the new component
import Home from './pages/Home';
import Footer from './components/Footer';
import FranchisePage from './components/Franchise/Franchisepage';
import InvestorPage from './components/Investor/Investorpage';
import DivisionPage from './components/Divisions/Divisionpage';
import AboutPage from './components/About/Aboutpage';
import Productpage from './components/Products/Productpage';
import ESGFoundation from './components/Esg/Esgpage';
import Contact from './components/Contactpage';
import TermsAndConditions from './components/Terms & Privacy/Terms&conditions';
import PrivacyPolicy from './components/Terms & Privacy/Privacypolicy';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop /> 
      
      {/* Floating Buttons appear on all pages */}
      <FloatingActions />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/investor" element={<InvestorPage />} />
          <Route path="/divisions" element={<DivisionPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<Productpage/>} />
          <Route path="/esg" element={<ESGFoundation />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;