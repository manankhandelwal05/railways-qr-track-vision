import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Gavel, TrendingUp } from 'lucide-react';

const mockAuctions = [
  {
    id: 'AUC/2024/001',
    title: 'Surplus Railway Fittings - Lot A',
    description: 'Various surplus railway fittings including used but serviceable components',
    startTime: '2024-01-20T10:00:00',
    endTime: '2024-01-22T17:00:00',
    currentBid: '₹2,50,000',
    minimumBid: '₹2,00,000',
    status: 'Active',
    bidders: 12
  },
  {
    id: 'AUC/2024/002',
    title: 'Scrap Metal from Decommissioned Track',
    description: 'Scrap metal lot from decommissioned railway tracks and components',
    startTime: '2024-01-18T09:00:00',
    endTime: '2024-01-20T16:00:00',
    currentBid: '₹5,75,000',
    minimumBid: '₹5,00,000',
    status: 'Ending Soon',
    bidders: 18
  },
  {
    id: 'AUC/2024/003',
    title: 'Obsolete QR Equipment',
    description: 'Obsolete QR code scanning equipment and related accessories',
    startTime: '2024-01-15T11:00:00',
    endTime: '2024-01-17T18:00:00',
    currentBid: '₹85,000',
    minimumBid: '₹75,000',
    status: 'Closed',
    bidders: 7
  }
];

const EAuctionPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">E-Auction</h1>
          <p className="text-muted-foreground">
            Participate in online auctions for surplus railway materials and equipment
          </p>
        </div>

        <div className="grid gap-6">
          {mockAuctions.map((auction) => (
            <Card key={auction.id} className="border-l-4 border-l-railway-red">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gov-blue">{auction.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Auction ID: {auction.id}</p>
                  </div>
                  <Badge 
                    variant={auction.status === 'Active' ? 'default' : 
                           auction.status === 'Ending Soon' ? 'destructive' : 'secondary'}
                    className={auction.status === 'Active' ? 'bg-green-500' : ''}
                  >
                    {auction.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{auction.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>Start: {new Date(auction.startTime).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-railway-red" />
                      <span>End: {new Date(auction.endTime).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span>Current Bid: </span>
                      <span className="font-bold text-green-600">{auction.currentBid}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Gavel className="h-4 w-4" />
                      <span>Bidders: {auction.bidders}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm">Minimum Bid: </span>
                    <span className="font-semibold">{auction.minimumBid}</span>
                  </div>
                  <Button 
                    variant={auction.status === 'Active' || auction.status === 'Ending Soon' ? 'default' : 'secondary'}
                    disabled={auction.status === 'Closed'}
                    className="flex items-center gap-2"
                  >
                    <Gavel className="h-4 w-4" />
                    {auction.status === 'Closed' ? 'View Results' : 'Place Bid'}
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

export default EAuctionPage;