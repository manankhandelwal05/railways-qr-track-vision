import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QrCode, Calendar, User, MapPin, Search, Clock } from 'lucide-react';

const mockQRScanRecords = [
  {
    id: 'SCAN/2024/001',
    qrCode: 'QR001234',
    itemName: 'Rail Clip Type A',
    scannerName: 'Rajesh Kumar',
    scannerRole: 'Field Engineer',
    scanLocation: 'Track KM 145.3, Mumbai-Pune Route',
    scanTime: '2024-01-18T14:30:00',
    scanType: 'Installation Verification',
    deviceUsed: 'Mobile App',
    gpsCoordinates: '19.0760° N, 72.8777° E',
    actionTaken: 'Confirmed Installation',
    batchNumber: 'SRC-2024-001'
  },
  {
    id: 'SCAN/2024/002',
    qrCode: 'QR001235',
    itemName: 'Concrete Sleeper PSC',
    scannerName: 'Priya Sharma',
    scannerRole: 'Depot Officer',
    scanLocation: 'Delhi Central Depot - Warehouse B',
    scanTime: '2024-01-18T10:15:00',
    scanType: 'Incoming Inspection',
    deviceUsed: 'Handheld Scanner',
    gpsCoordinates: '28.6448° N, 77.2167° E',
    actionTaken: 'Quality Check Completed',
    batchNumber: 'CSM-2024-005'
  },
  {
    id: 'SCAN/2024/003',
    qrCode: 'QR001236',
    itemName: 'Fish Bolt M24',
    scannerName: 'Amit Patel',
    scannerRole: 'Inspector',
    scanLocation: 'Chennai Depot - Inspection Bay 3',
    scanTime: '2024-01-17T16:45:00',
    scanType: 'Pre-delivery Inspection',
    deviceUsed: 'Tablet Scanner',
    gpsCoordinates: '13.0878° N, 80.2785° E',
    actionTaken: 'Marked for Re-inspection',
    batchNumber: 'SRC-2024-002'
  },
  {
    id: 'SCAN/2024/004',
    qrCode: 'QR001237',
    itemName: 'Rail Pad Composite',
    scannerName: 'Sunita Reddy',
    scannerRole: 'Field Engineer',
    scanLocation: 'Track KM 89.7, Hyderabad-Bangalore Route',
    scanTime: '2024-01-17T12:20:00',
    scanType: 'Defect Reporting',
    deviceUsed: 'Mobile App',
    gpsCoordinates: '17.3850° N, 78.4867° E',
    actionTaken: 'Defect Reported - Wear Detected',
    batchNumber: 'RSS-2024-003'
  },
  {
    id: 'SCAN/2024/005',
    qrCode: 'QR001238',
    itemName: 'Rail Joint Bar',
    scannerName: 'Vikram Singh',
    scannerRole: 'Vendor Quality Team',
    scanLocation: 'Kolkata Manufacturing Unit',
    scanTime: '2024-01-16T09:30:00',
    scanType: 'Manufacturing QC',
    deviceUsed: 'Fixed Scanner Station',
    gpsCoordinates: '22.5726° N, 88.3639° E',
    actionTaken: 'QC Passed - Ready for Dispatch',
    batchNumber: 'KOL-2024-001'
  }
];

const QRScanRecordsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScanType, setSelectedScanType] = useState('all');

  const filteredRecords = mockQRScanRecords.filter(record => {
    const matchesSearch = record.qrCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.scannerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesScanType = selectedScanType === 'all' || record.scanType === selectedScanType;
    
    return matchesSearch && matchesScanType;
  });

  const getScanTypeColor = (scanType: string) => {
    switch (scanType) {
      case 'Installation Verification':
        return 'bg-green-500';
      case 'Incoming Inspection':
        return 'bg-blue-500';
      case 'Defect Reporting':
        return 'bg-red-500';
      case 'Manufacturing QC':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">QR Scan Records</h1>
          <p className="text-muted-foreground">
            Track and monitor all QR code scanning activities across the railway network
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Scan Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search by QR code, item name, or scanner..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:col-span-2"
              />
              <Select value={selectedScanType} onValueChange={setSelectedScanType}>
                <SelectTrigger>
                  <SelectValue placeholder="Scan Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Scan Types</SelectItem>
                  <SelectItem value="Installation Verification">Installation Verification</SelectItem>
                  <SelectItem value="Incoming Inspection">Incoming Inspection</SelectItem>
                  <SelectItem value="Pre-delivery Inspection">Pre-delivery Inspection</SelectItem>
                  <SelectItem value="Defect Reporting">Defect Reporting</SelectItem>
                  <SelectItem value="Manufacturing QC">Manufacturing QC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <Card key={record.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gov-blue/10">
                      <QrCode className="h-5 w-5 text-gov-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gov-blue">{record.itemName}</h3>
                      <p className="text-sm text-muted-foreground">QR Code: {record.qrCode}</p>
                    </div>
                  </div>
                  <Badge className={getScanTypeColor(record.scanType)}>
                    {record.scanType}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Scan Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{record.scannerName} ({record.scannerRole})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{new Date(record.scanTime).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{record.scanLocation}</span>
                        </div>
                        <div>
                          <span className="font-medium">Device:</span> {record.deviceUsed}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Action Details</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-muted-foreground">Action Taken:</span>
                          <p className="mt-1">{record.actionTaken}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">Batch Number:</span>
                          <p>{record.batchNumber}</p>
                        </div>
                        <div>
                          <span className="font-medium text-muted-foreground">GPS Coordinates:</span>
                          <p className="font-mono text-xs">{record.gpsCoordinates}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Scan ID: {record.id}
                  </div>
                  <Button variant="outline" size="sm">
                    View Full Record
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <QrCode className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No scan records found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or scan type filter
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default QRScanRecordsPage;