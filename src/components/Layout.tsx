import React from 'react';
import { Header } from './Header';
import { NavigationTabs } from './NavigationTabs';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <NavigationTabs />
      
      <div className="flex flex-1">
        {showSidebar && <Sidebar />}
        <main className="flex-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};