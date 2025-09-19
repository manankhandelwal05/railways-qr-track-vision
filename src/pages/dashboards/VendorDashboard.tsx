import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Plus, BarChart3, FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const mockJobData = [
  {
    id: 'JOB/2024/001',
    lotNumber: 'SRC-2024-001',
    poNumber: 'PO/IR/2024/445',
    quantity: 500,
    markedQty: 485,
    status: 'In Progress',
    defectRate: 3.0,
    startDate: '2024-01-15'
  },
  {
    id: 'JOB/2024/002',
    lotNumber: 'SRC-2024-002',
    poNumber: 'PO/IR/2024/446',
    quantity: 750,
    markedQty: 750,
    status: 'Completed',
    defectRate: 1.2,
    startDate: '2024-01-12'
  }
];

const VendorDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Vendor Dashboard</h1>
          <p className="text-muted-foreground">
            Manage marking jobs, monitor progress, and view reports
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Jobs</p>
                  <p className="text-2xl font-bold text-gov-blue">12</p>
                </div>
                <Package className="h-8 w-8 text-gov-blue" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Jobs</p>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Quality Rate</p>
                  <p className="text-2xl font-bold text-green-600">97.8%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Items Marked</p>
                  <p className="text-2xl font-bold text-gov-blue">8,450</p>
                </div>
                <BarChart3 className="h-8 w-8 text-gov-blue" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Plus className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Create Marking Job</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create a new QR marking job for your lot
              </p>
              <Button className="w-full">Create Job</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Job Monitor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Monitor progress of active marking jobs
              </p>
              <Button variant="outline" className="w-full">View Jobs</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">Reports</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View quality reports and job history
              </p>
              <Button variant="outline" className="w-full">View Reports</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Jobs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Recent Marking Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockJobData.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold">Lot: {job.lotNumber}</h4>
                      <Badge variant={job.status === 'Completed' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                      <div>PO: {job.poNumber}</div>
                      <div>Total: {job.quantity} units</div>
                      <div>Marked: {job.markedQty} units</div>
                      <div>Quality: {(100 - job.defectRate).toFixed(1)}%</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default VendorDashboard;