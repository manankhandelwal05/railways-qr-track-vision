import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gov-blue-dark text-gov-blue-foreground mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/e-tender" className="hover:text-gov-gold">E-Tender</Link></li>
              <li><Link to="/e-auction" className="hover:text-gov-gold">E-Auction</Link></li>
              <li><Link to="/contracts" className="hover:text-gov-gold">Contracts</Link></li>
              <li><Link to="/faq" className="hover:text-gov-gold">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/learning" className="hover:text-gov-gold">Learning Center</Link></li>
              <li><Link to="/approval" className="hover:text-gov-gold">Vendor Approval</Link></li>
              <li><Link to="#" className="hover:text-gov-gold">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gov-gold">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-gov-gold">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-gov-gold">Technical Support</Link></li>
              <li><Link to="#" className="hover:text-gov-gold">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gov-blue-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; Ministry of Railways, Government of India | Powered by Smart India Hackathon 2025.</p>
        </div>
      </div>
    </footer>
  );
};