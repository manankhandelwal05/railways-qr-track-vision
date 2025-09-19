import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, QrCode, Package, CheckCircle, Clock, AlertTriangle, Search } from 'lucide-react';

const mockShipments = [
  {
    id: 'SHIP/2024/001',
    vendor: 'Steel Rail Components Pvt Ltd',
    lotNumber: 'SRC-2024-001',
    expectedQty: 500,
    receivedQty: 485,
    status: 'Received',
    arrivalDate: '2024-01-18',
    qrVerified: true
  },
  {
    id: 'SHIP/2024/002',
    vendor: 'Concrete Sleepers Manufacturing Co',
    lotNumber: 'CSM-2024-005',
    expectedQty: 1200,
    receivedQty: 0,
    status: 'In Transit',
    arrivalDate: '2024-01-20',
    qrVerified: false
  }
];

const mockInventoryStats = {
  totalItems: 8450,
  inStock: 7850,
  lowStock: 450,
  outOfStock: 150,
  pendingInspection: 125
};

const DepotOfficerDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Depot Officer Dashboard</h1>
          <p className="text-muted-foreground">
            Manage shipments, inventory, and sample checks
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Inventory</p>
                  <p className="text-2xl font-bold text-gov-blue">{mockInventoryStats.totalItems.toLocaleString()}</p>
                </div>
                <Package className="h-8 w-8 text-gov-blue" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Stock</p>
                  <p className="text-2xl font-bold text-green-600">{mockInventoryStats.inStock.toLocaleString()}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Low Stock</p>
                  <p className="text-2xl font-bold text-yellow-600">{mockInventoryStats.lowStock}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Out of Stock</p>
                  <p className="text-2xl font-bold text-red-600">{mockInventoryStats.outOfStock}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Check</p>
                  <p className="text-2xl font-bold text-orange-600">{mockInventoryStats.pendingInspection}</p>
                </div>
                <QrCode className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Receive Shipment</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scan carton QR and receive incoming shipments
              </p>
              <Button className="w-full">Receive Shipment</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <QrCode className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Sample Check</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scan items for sample quality checking
              </p>
              <Button variant="outline" className="w-full">Start Sample Check</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Search className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Search Inventory</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Search and view detailed inventory records
              </p>
              <Button variant="outline" className="w-full">Search Inventory</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Shipments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Recent Shipments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockShipments.map((shipment) => (
                  <div key={shipment.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gov-blue">{shipment.vendor}</h4>
                        <p className="text-sm text-muted-foreground">Lot: {shipment.lotNumber}</p>
                      </div>
                      <Badge variant={shipment.status === 'Received' ? 'default' : 'secondary'}>
                        {shipment.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="font-medium">Expected:</span> {shipment.expectedQty} units
                      </div>
                      <div>
                        <span className="font-medium">Received:</span> {shipment.receivedQty} units
                      </div>
                      <div>
                        <span className="font-medium">Arrival:</span> {new Date(shipment.arrivalDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">QR Verified:</span>
                        {shipment.qrVerified ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Clock className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {shipment.status === 'Received' ? 'View Details' : 'Track Shipment'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Inventory Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Inventory Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium">In Stock</span>
                  </div>
                  <span className="font-bold text-green-600">{mockInventoryStats.inStock.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium">Low Stock Alert</span>
                  </div>
                  <span className="font-bold text-yellow-600">{mockInventoryStats.lowStock}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span className="font-medium">Out of Stock</span>
                  </div>
                  <span className="font-bold text-red-600">{mockInventoryStats.outOfStock}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-orange-600" />
                    <span className="font-medium">Pending Inspection</span>
                  </div>
                  <span className="font-bold text-orange-600">{mockInventoryStats.pendingInspection}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DepotOfficerDashboard;