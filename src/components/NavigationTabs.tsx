import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navigationTabs = [
  { label: 'Login', path: '/login' },
  { label: 'E-Tender', path: '/e-tender' },
  { label: 'E-Auction', path: '/e-auction' },
  { label: 'Contracts', path: '/contracts' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Learning', path: '/learning' },
  { label: 'Approval of Vendors', path: '/approval' },
  { label: 'Sign Up', path: '/signup' },
];

export const NavigationTabs: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-secondary border-b">
      <div className="px-6">
        <div className="flex space-x-8 overflow-x-auto">
          {navigationTabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors",
                  isActive
                    ? "text-railway-red border-railway-red"
                    : "text-secondary-foreground border-transparent hover:text-railway-red hover:border-railway-red/50"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};