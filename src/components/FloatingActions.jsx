import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "8778584566";

  return (
    /* Reduced gap and bottom/right spacing for a tighter fit */
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-50 flex flex-col gap-3">
      
      {/* Home Icon */}
      <Link 
        to="/" 
        className="bg-yellow-500 border border-black/10 p-2.5 md:p-3 rounded-full text-black hover:scale-110 transition-all duration-300 shadow-lg active:scale-95"
        title="Go to Home"
      >
        {/* Size 16 for mobile, 20 for desktop */}
        <Home className="w-4 h-4 md:w-5 md:h-5" />
      </Link>

      {/* WhatsApp Icon */}
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] p-2.5 md:p-3 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-lg active:scale-95"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
      </a>

      {/* Call Icon */}
      <a 
        href={`tel:${phoneNumber}`} 
        className="bg-yellow-500 p-2.5 md:p-3 rounded-full text-black hover:scale-110 transition-transform duration-300 shadow-lg active:scale-95"
        title="Call Us"
      >
        <Phone className="w-4 h-4 md:w-5 md:h-5" />
      </a>
    </div>
  );
};

export default FloatingActions;