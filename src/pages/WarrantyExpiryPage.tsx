import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, AlertTriangle, Package, MapPin, Calendar, Bell } from 'lucide-react';

const mockWarrantyData = [
  {
    id: 'QR001237',
    itemName: 'Rail Pad Composite',
    category: 'Track Fittings',
    vendor: 'Railway Safety Systems Ltd',
    batchNumber: 'RSS-2024-003',
    quantity: 750,
    location: 'Kolkata Depot',
    installationDate: '2023-01-08',
    warrantyExpiry: '2025-01-08',
    daysUntilExpiry: 20,
    urgencyLevel: 'Critical',
    maintenanceRequired: true,
    replacementCost: '₹2,25,000'
  },
  {
    id: 'QR001240',
    itemName: 'Fish Bolt M20',
    category: 'Track Fittings',
    vendor: 'Steel Rail Components Pvt Ltd',
    batchNumber: 'SRC-2023-015',
    quantity: 300,
    location: 'Mumbai Depot',
    installationDate: '2022-03-15',
    warrantyExpiry: '2025-03-15',
    daysUntilExpiry: 56,
    urgencyLevel: 'High',
    maintenanceRequired: true,
    replacementCost: '₹90,000'
  },
  {
    id: 'QR001241',
    itemName: 'Elastic Rail Clip',
    category: 'Track Fittings',
    vendor: 'Advanced Railway Fittings Ltd',
    batchNumber: 'ARF-2023-008',
    quantity: 1200,
    location: 'Delhi Depot',
    installationDate: '2022-05-10',
    warrantyExpiry: '2025-05-10',
    daysUntilExpiry: 112,
    urgencyLevel: 'Medium',
    maintenanceRequired: false,
    replacementCost: '₹3,60,000'
  },
  {
    id: 'QR001242',
    itemName: 'Concrete Sleeper Type IX',
    category: 'Sleepers',
    vendor: 'Concrete Sleepers Manufacturing Co',
    batchNumber: 'CSM-2022-045',
    quantity: 800,
    location: 'Chennai Depot',
    installationDate: '2022-08-20',
    warrantyExpiry: '2025-08-20',
    daysUntilExpiry: 213,
    urgencyLevel: 'Low',
    maintenanceRequired: false,
    replacementCost: '₹12,00,000'
  },
  {
    id: 'QR001243',
    itemName: 'Rail Joint Insulator',
    category: 'Track Fittings',
    vendor: 'Insulation Technologies Pvt Ltd',
    batchNumber: 'ITP-2023-022',
    quantity: 150,
    location: 'Hyderabad Depot',
    installationDate: '2023-09-05',
    warrantyExpiry: '2025-09-05',
    daysUntilExpiry: 229,
    urgencyLevel: 'Low',
    maintenanceRequired: true,
    replacementCost: '₹75,000'
  }
];

const WarrantyExpiryPage: React.FC = () => {
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredData = mockWarrantyData.filter(item => {
    const matchesUrgency = selectedUrgency === 'all' || item.urgencyLevel === selectedUrgency;
    const matchesLocation = selectedLocation === 'all' || item.location === selectedLocation;
    
    return matchesUrgency && matchesLocation;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return 'bg-red-500';
      case 'High':
        return 'bg-orange-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
      case 'High':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  // Sort by days until expiry (most urgent first)
  const sortedData = filteredData.sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry);

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Warranty Expiry Alerts</h1>
          <p className="text-muted-foreground">
            Monitor warranty expiration dates and plan maintenance activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">
                {mockWarrantyData.filter(item => item.urgencyLevel === 'Critical').length}
              </div>
              <div className="text-sm text-red-600">Critical</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">
                {mockWarrantyData.filter(item => item.urgencyLevel === 'High').length}
              </div>
              <div className="text-sm text-orange-600">High Priority</div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {mockWarrantyData.filter(item => item.urgencyLevel === 'Medium').length}
              </div>
              <div className="text-sm text-yellow-600">Medium Priority</div>
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {mockWarrantyData.filter(item => item.urgencyLevel === 'Low').length}
              </div>
              <div className="text-sm text-green-600">Low Priority</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Filter Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select value={selectedUrgency} onValueChange={setSelectedUrgency}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Urgency Levels</SelectItem>
                  <SelectItem value="Critical">Critical</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Mumbai Depot">Mumbai Depot</SelectItem>
                  <SelectItem value="Delhi Depot">Delhi Depot</SelectItem>
                  <SelectItem value="Chennai Depot">Chennai Depot</SelectItem>
                  <SelectItem value="Kolkata Depot">Kolkata Depot</SelectItem>
                  <SelectItem value="Hyderabad Depot">Hyderabad Depot</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {sortedData.map((item) => (
            <Card key={item.id} className={`hover:shadow-lg transition-shadow border-l-4 ${
              item.urgencyLevel === 'Critical' ? 'border-l-red-500' :
              item.urgencyLevel === 'High' ? 'border-l-orange-500' :
              item.urgencyLevel === 'Medium' ? 'border-l-yellow-500' : 'border-l-green-500'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gov-blue/10">
                      <Package className="h-5 w-5 text-gov-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gov-blue">{item.itemName}</h3>
                      <p className="text-sm text-muted-foreground">QR Code: {item.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getUrgencyColor(item.urgencyLevel)} variant="default">
                      <span className="flex items-center gap-1">
                        {getUrgencyIcon(item.urgencyLevel)}
                        {item.urgencyLevel}
                      </span>
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Vendor:</span>
                      <p>{item.vendor}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Batch Number:</span>
                      <p>{item.batchNumber}</p>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-muted-foreground">Quantity:</span>
                      <p>{item.quantity} units</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Installed: {new Date(item.installationDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-railway-red" />
                      <span>Expires: {new Date(item.warrantyExpiry).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className={`text-center p-3 rounded-lg ${
                      item.daysUntilExpiry <= 30 ? 'bg-red-50' :
                      item.daysUntilExpiry <= 90 ? 'bg-yellow-50' : 'bg-green-50'
                    }`}>
                      <div className={`font-bold text-2xl ${
                        item.daysUntilExpiry <= 30 ? 'text-red-600' :
                        item.daysUntilExpiry <= 90 ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {item.daysUntilExpiry}
                      </div>
                      <div className="text-sm text-muted-foreground">Days Until Expiry</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="font-medium">Replacement Cost: </span>
                      <span className="text-gov-blue font-semibold">{item.replacementCost}</span>
                    </div>
                    {item.maintenanceRequired && (
                      <Badge variant="outline" className="text-railway-red border-railway-red">
                        Maintenance Required
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Schedule Inspection
                    </Button>
                    <Button size="sm">
                      Plan Replacement
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedData.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Clock className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No warranty alerts found</h3>
              <p className="text-muted-foreground">
                No items matching the selected filters require immediate attention
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default WarrantyExpiryPage;