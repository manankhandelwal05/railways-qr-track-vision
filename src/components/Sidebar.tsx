import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, QrCode, Clock, FileBarChart, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const quickLinks = [
  { title: 'Search Inventory', path: '/search-inventory', icon: Search },
  { title: 'Inspection Reports', path: '/inspection-reports', icon: FileText },
  { title: 'QR Scan Records', path: '/qr-scan-records', icon: QrCode },
  { title: 'Warranty Expiry', path: '/warranty-expiry', icon: Clock },
];

const usefulLinks = [
  { title: 'Railway Circulars', path: '#', icon: FileBarChart },
  { title: 'Safety Notices', path: '#', icon: Shield },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 p-4 space-y-4">
      <Card className="border-gov-blue">
        <CardHeader className="bg-gov-blue text-gov-blue-foreground pb-3">
          <CardTitle className="text-lg">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <nav className="space-y-1">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </CardContent>
      </Card>

      <Card className="border-railway-red">
        <CardHeader className="bg-railway-red text-railway-red-foreground pb-3">
          <CardTitle className="text-lg">Other Useful Links</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <nav className="space-y-1">
            {usefulLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
};