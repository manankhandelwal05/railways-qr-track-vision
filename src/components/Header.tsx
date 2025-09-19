import React from 'react';
import { Link } from 'react-router-dom';
import ashokaEmblem from '@/assets/ashoka-emblem.png';

export const Header: React.FC = () => {
  return (
    <header className="bg-gov-blue text-gov-blue-foreground">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <img 
            src={ashokaEmblem} 
            alt="Government of India Emblem" 
            className="h-12 w-12"
          />
          <div className="text-lg font-semibold">Government of India</div>
        </div>
        
        <nav className="flex items-center gap-6 text-sm">
          <Link to="#" className="hover:text-gov-gold">Ask a Question</Link>
          <Link to="#" className="text-railway-red hover:text-railway-red-dark font-semibold">
            Contact Helpdesk
          </Link>
          <Link to="#" className="hover:text-gov-gold">Accessibility</Link>
        </nav>
      </div>
    </header>
  );
};