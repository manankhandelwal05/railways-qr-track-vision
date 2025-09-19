import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Package, MapPin, Calendar } from 'lucide-react';

const mockInventoryData = [
  {
    id: 'QR001234',
    itemName: 'Rail Clip Type A',
    category: 'Track Fittings',
    vendor: 'Steel Rail Components Pvt Ltd',
    quantity: 500,
    location: 'Mumbai Depot',
    batchNo: 'SRC-2024-001',
    manufacturingDate: '2024-01-15',
    warrantyExpiry: '2027-01-15',
    status: 'In Stock'
  },
  {
    id: 'QR001235',
    itemName: 'Concrete Sleeper PSC',
    category: 'Sleepers',
    vendor: 'Concrete Sleepers Manufacturing Co',
    quantity: 1200,
    location: 'Delhi Depot',
    batchNo: 'CSM-2024-005',
    manufacturingDate: '2024-01-10',
    warrantyExpiry: '2034-01-10',
    status: 'In Stock'
  },
  {
    id: 'QR001236',
    itemName: 'Fish Bolt M24',
    category: 'Track Fittings',
    vendor: 'Steel Rail Components Pvt Ltd',
    quantity: 0,
    location: 'Chennai Depot',
    batchNo: 'SRC-2024-002',
    manufacturingDate: '2024-01-12',
    warrantyExpiry: '2026-01-12',
    status: 'Out of Stock'
  },
  {
    id: 'QR001237',
    itemName: 'Rail Pad Composite',
    category: 'Track Fittings',
    vendor: 'Railway Safety Systems Ltd',
    quantity: 750,
    location: 'Kolkata Depot',
    batchNo: 'RSS-2024-003',
    manufacturingDate: '2024-01-08',
    warrantyExpiry: '2025-01-08',
    status: 'Low Stock'
  }
];

const SearchInventoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredData = mockInventoryData.filter(item => {
    const matchesSearch = item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-500';
      case 'Low Stock':
        return 'bg-yellow-500';
      case 'Out of Stock':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Search Inventory</h1>
          <p className="text-muted-foreground">
            Search and view railway fittings and components inventory across all depots
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Input
                placeholder="Search by item name, QR code, or vendor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:col-span-2"
              />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Track Fittings">Track Fittings</SelectItem>
                  <SelectItem value="Sleepers">Sleepers</SelectItem>
                  <SelectItem value="Rails">Rails</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="In Stock">In Stock</SelectItem>
                  <SelectItem value="Low Stock">Low Stock</SelectItem>
                  <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredData.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
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
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Category:</span>
                    <p>{item.category}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Vendor:</span>
                    <p>{item.vendor}</p>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Quantity:</span>
                    <p className="font-semibold">{item.quantity} units</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">Batch No:</span>
                    <p>{item.batchNo}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <div>
                      <span className="font-medium text-muted-foreground">Manufactured:</span>
                      <p>{new Date(item.manufacturingDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-railway-red" />
                    <div>
                      <span className="font-medium text-muted-foreground">Warranty Expires:</span>
                      <p>{new Date(item.warrantyExpiry).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredData.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default SearchInventoryPage;