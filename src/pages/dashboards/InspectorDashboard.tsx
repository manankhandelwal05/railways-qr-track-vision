import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, AlertTriangle, BarChart3, CheckCircle, Clock, TrendingUp, TrendingDown } from 'lucide-react';

const mockInspectionStats = {
  totalInspections: 45,
  pendingInspections: 8,
  completedThisMonth: 37,
  avgDefectRate: 2.8,
  ncrRaised: 12,
  ncrResolved: 9
};

const mockRecentInspections = [
  {
    id: 'INS/2024/003',
    vendor: 'Steel Rail Components Pvt Ltd',
    lotNumber: 'SRC-2024-001',
    inspectionDate: '2024-01-18',
    status: 'Completed',
    defectRate: 3.0,
    itemsChecked: 500
  },
  {
    id: 'INS/2024/004',
    vendor: 'Concrete Sleepers Manufacturing Co',
    lotNumber: 'CSM-2024-005',
    inspectionDate: '2024-01-17',
    status: 'Under Review',
    defectRate: 4.2,
    itemsChecked: 1200
  }
];

const mockDefectTrends = [
  { vendor: 'Steel Rail Components Pvt Ltd', defectRate: 3.0, trend: 'down' },
  { vendor: 'QR Tech Solutions India', defectRate: 0.5, trend: 'stable' },
  { vendor: 'Concrete Sleepers Manufacturing Co', defectRate: 4.2, trend: 'up' },
  { vendor: 'Railway Safety Systems Ltd', defectRate: 2.0, trend: 'down' }
];

const InspectorDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Inspector Dashboard</h1>
          <p className="text-muted-foreground">
            Manage inspections, track NCRs, and monitor quality trends
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Inspections</p>
                  <p className="text-2xl font-bold text-gov-blue">{mockInspectionStats.totalInspections}</p>
                </div>
                <FileText className="h-8 w-8 text-gov-blue" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{mockInspectionStats.pendingInspections}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{mockInspectionStats.completedThisMonth}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Defect Rate</p>
                  <p className="text-2xl font-bold text-orange-600">{mockInspectionStats.avgDefectRate}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">NCRs Raised</p>
                  <p className="text-2xl font-bold text-red-600">{mockInspectionStats.ncrRaised}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">NCRs Resolved</p>
                  <p className="text-2xl font-bold text-blue-600">{mockInspectionStats.ncrResolved}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Inspection Records</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View and manage past inspection records
              </p>
              <Button className="w-full">View Records</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-railway-red" />
              <h3 className="text-lg font-semibold mb-2">Raise NCR</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create new Non-Conformance Report
              </p>
              <Button className="w-full bg-railway-red hover:bg-railway-red-dark">Raise NCR</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Quality Reports</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate quality trend reports
              </p>
              <Button variant="outline" className="w-full">Generate Reports</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Inspections */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Inspections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentInspections.map((inspection) => (
                  <div key={inspection.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gov-blue">{inspection.vendor}</h4>
                        <p className="text-sm text-muted-foreground">
                          {inspection.id} • Lot: {inspection.lotNumber}
                        </p>
                      </div>
                      <Badge variant={inspection.status === 'Completed' ? 'default' : 'secondary'}>
                        {inspection.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div>
                        <span className="font-medium">Items Checked:</span> {inspection.itemsChecked}
                      </div>
                      <div>
                        <span className="font-medium">Defect Rate:</span> 
                        <span className={`ml-1 font-bold ${
                          inspection.defectRate <= 2 ? 'text-green-600' : 
                          inspection.defectRate <= 5 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {inspection.defectRate}%
                        </span>
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium">Date:</span> {new Date(inspection.inspectionDate).toLocaleDateString()}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Inspection Report
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vendor Quality Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Vendor Quality Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDefectTrends.map((vendor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{vendor.vendor}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">Defect Rate:</span>
                        <span className={`font-bold text-sm ${
                          vendor.defectRate <= 2 ? 'text-green-600' : 
                          vendor.defectRate <= 5 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {vendor.defectRate}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {vendor.trend === 'up' && <TrendingUp className="h-5 w-5 text-red-500" />}
                      {vendor.trend === 'down' && <TrendingDown className="h-5 w-5 text-green-500" />}
                      {vendor.trend === 'stable' && <div className="h-5 w-5 bg-gray-400 rounded-full"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InspectorDashboard;