import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, MapPin } from 'lucide-react';

const mockTenders = [
  {
    id: 'IR/2024/001',
    title: 'Supply of Railway Track Fittings - Zone A',
    description: 'Supply of various railway track fittings including bolts, nuts, and clips',
    publishDate: '2024-01-15',
    closingDate: '2024-02-15',
    location: 'Northern Railway',
    status: 'Active',
    estimatedValue: '₹50,00,000'
  },
  {
    id: 'IR/2024/002',
    title: 'QR Code Labels for Railway Components',
    description: 'Supply and installation of QR code labels for railway components',
    publishDate: '2024-01-10',
    closingDate: '2024-02-10',
    location: 'Central Railway',
    status: 'Active',
    estimatedValue: '₹25,00,000'
  },
  {
    id: 'IR/2024/003',
    title: 'Concrete Sleepers - Batch Production',
    description: 'Manufacturing and supply of prestressed concrete sleepers',
    publishDate: '2024-01-05',
    closingDate: '2024-01-25',
    location: 'Western Railway',
    status: 'Closed',
    estimatedValue: '₹1,50,00,000'
  }
];

const ETenderPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">E-Tender</h1>
          <p className="text-muted-foreground">
            Browse and download active tender notices for railway fittings and components
          </p>
        </div>

        <div className="grid gap-6">
          {mockTenders.map((tender) => (
            <Card key={tender.id} className="border-l-4 border-l-gov-blue">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gov-blue">{tender.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Tender ID: {tender.id}</p>
                  </div>
                  <Badge 
                    variant={tender.status === 'Active' ? 'default' : 'secondary'}
                    className={tender.status === 'Active' ? 'bg-green-500' : ''}
                  >
                    {tender.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{tender.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Published: {new Date(tender.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-railway-red" />
                    <span>Closes: {new Date(tender.closingDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{tender.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold">Estimated Value: </span>
                    <span className="text-gov-blue font-bold">{tender.estimatedValue}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={tender.status === 'Closed'}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Tender
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ETenderPage;