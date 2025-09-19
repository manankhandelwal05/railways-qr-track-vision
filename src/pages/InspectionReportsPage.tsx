import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, AlertTriangle, CheckCircle, Download } from 'lucide-react';

const mockInspectionReports = [
  {
    id: 'INS/2024/001',
    inspectorName: 'Raj Kumar Singh',
    inspectionDate: '2024-01-18',
    vendorName: 'Steel Rail Components Pvt Ltd',
    lotNumber: 'SRC-2024-001',
    itemsInspected: 500,
    itemsPassed: 485,
    itemsFailed: 15,
    defectRate: 3.0,
    status: 'Completed',
    reportType: 'Incoming Inspection',
    majorDefects: ['Dimensional variation', 'Surface finish issues'],
    location: 'Mumbai Depot'
  },
  {
    id: 'INS/2024/002',
    inspectorName: 'Priya Sharma',
    inspectionDate: '2024-01-16',
    vendorName: 'QR Tech Solutions India',
    lotNumber: 'QRT-2024-003',
    itemsInspected: 200,
    itemsPassed: 200,
    itemsFailed: 0,
    defectRate: 0,
    status: 'Completed',
    reportType: 'QR Code Verification',
    majorDefects: [],
    location: 'Delhi Depot'
  },
  {
    id: 'INS/2024/003',
    inspectorName: 'Amit Patel',
    inspectionDate: '2024-01-15',
    vendorName: 'Concrete Sleepers Manufacturing Co',
    lotNumber: 'CSM-2024-005',
    itemsInspected: 1200,
    itemsPassed: 1150,
    itemsFailed: 50,
    defectRate: 4.2,
    status: 'Under Review',
    reportType: 'Pre-delivery Inspection',
    majorDefects: ['Concrete strength variance', 'Dimensional tolerance'],
    location: 'Ahmedabad Depot'
  },
  {
    id: 'INS/2024/004',
    inspectorName: 'Sunita Reddy',
    inspectionDate: '2024-01-12',
    vendorName: 'Railway Safety Systems Ltd',
    lotNumber: 'RSS-2024-003',
    itemsInspected: 750,
    itemsPassed: 735,
    itemsFailed: 15,
    defectRate: 2.0,
    status: 'Approved',
    reportType: 'Field Installation Inspection',
    majorDefects: ['Marking clarity'],
    location: 'Hyderabad Depot'
  }
];

const InspectionReportsPage: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'Approved':
        return 'bg-blue-500';
      case 'Under Review':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDefectRateColor = (rate: number) => {
    if (rate === 0) return 'text-green-600';
    if (rate <= 2) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Inspection Reports</h1>
          <p className="text-muted-foreground">
            View and manage inspection reports for railway fittings and components
          </p>
        </div>

        <div className="grid gap-6">
          {mockInspectionReports.map((report) => (
            <Card key={report.id} className="border-l-4 border-l-gov-blue">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gov-blue/10">
                      <FileText className="h-5 w-5 text-gov-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gov-blue">
                        {report.reportType}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Report ID: {report.id}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Inspection Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>Inspector: {report.inspectorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Date: {new Date(report.inspectionDate).toLocaleDateString()}</span>
                        </div>
                        <div>
                          <span className="font-medium">Vendor:</span> {report.vendorName}
                        </div>
                        <div>
                          <span className="font-medium">Lot Number:</span> {report.lotNumber}
                        </div>
                        <div>
                          <span className="font-medium">Location:</span> {report.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Inspection Results</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="font-bold text-lg">{report.itemsInspected}</div>
                          <div className="text-muted-foreground">Total Items</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="font-bold text-lg text-green-600 flex items-center justify-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            {report.itemsPassed}
                          </div>
                          <div className="text-muted-foreground">Passed</div>
                        </div>
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <div className="font-bold text-lg text-red-600 flex items-center justify-center gap-1">
                            <AlertTriangle className="h-4 w-4" />
                            {report.itemsFailed}
                          </div>
                          <div className="text-muted-foreground">Failed</div>
                        </div>
                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                          <div className={`font-bold text-lg ${getDefectRateColor(report.defectRate)}`}>
                            {report.defectRate}%
                          </div>
                          <div className="text-muted-foreground">Defect Rate</div>
                        </div>
                      </div>
                    </div>

                    {report.majorDefects.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm text-railway-red mb-2">Major Defects Identified</h4>
                        <div className="space-y-1">
                          {report.majorDefects.map((defect, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-3 w-3 text-railway-red" />
                              <span>{defect}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6 pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    Pass Rate: <span className={`font-semibold ${getDefectRateColor(100 - report.defectRate)}`}>
                      {((report.itemsPassed / report.itemsInspected) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Report
                    </Button>
                    <Button size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default InspectionReportsPage;