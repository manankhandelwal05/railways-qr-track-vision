import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Building, Settings, Shield, BarChart3, Database, AlertTriangle, TrendingUp } from 'lucide-react';
const mockSystemStats = {
  totalVendors: 24,
  activeVendors: 18,
  totalUsers: 142,
  activeUsers: 89,
  totalParts: 125420,
  defectiveReports: 48,
  systemUptime: 99.8,
  dataIntegrity: 99.9
};
const mockVendorPerformance = [{
  name: 'Steel Rail Components Pvt Ltd',
  performance: 96.8,
  trend: 'up',
  totalOrders: 45
}, {
  name: 'QR Tech Solutions India',
  performance: 99.2,
  trend: 'stable',
  totalOrders: 28
}, {
  name: 'Concrete Sleepers Manufacturing Co',
  performance: 94.5,
  trend: 'down',
  totalOrders: 67
}, {
  name: 'Railway Safety Systems Ltd',
  performance: 97.1,
  trend: 'up',
  totalOrders: 33
}];
const mockSystemAlerts = [{
  type: 'Integration Warning',
  message: 'UDM API sync delayed by 15 minutes',
  severity: 'Medium',
  timestamp: '2024-01-18T14:30:00'
}, {
  type: 'User Activity',
  message: 'Unusually high login attempts detected',
  severity: 'High',
  timestamp: '2024-01-18T13:45:00'
}, {
  type: 'Data Quality',
  message: '3 QR codes failed validation checks',
  severity: 'Low',
  timestamp: '2024-01-18T12:15:00'
}];
const AdminDashboard: React.FC = () => {
  return <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            System administration, vendor management, and integration oversight
          </p>
        </div>

        {/* System Overview KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gov-blue">{mockSystemStats.totalVendors}</div>
                <div className="text-sm text-muted-foreground">Total Vendors</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockSystemStats.activeVendors}</div>
                <div className="text-sm text-muted-foreground">Active Vendors</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gov-blue">{mockSystemStats.totalUsers}</div>
                <div className="text-sm text-muted-foreground">Total Users</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockSystemStats.activeUsers}</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gov-blue">{mockSystemStats.totalParts.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Parts</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{mockSystemStats.defectiveReports}</div>
                <div className="text-sm text-muted-foreground">Defective Reports</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockSystemStats.systemUptime}%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{mockSystemStats.dataIntegrity}%</div>
                <div className="text-sm text-muted-foreground">Data Integrity</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vendor Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Vendor Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockVendorPerformance.map((vendor, index) => <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{vendor.name}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {vendor.totalOrders} orders
                        </Badge>
                        {vendor.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                        {vendor.trend === 'down' && <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />}
                        {vendor.trend === 'stable' && <div className="h-4 w-4 bg-gray-400 rounded-full"></div>}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                          <div className={`h-2 rounded-full ${vendor.performance >= 98 ? 'bg-green-500' : vendor.performance >= 95 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                        width: `${vendor.performance}%`
                      }}></div>
                        </div>
                      </div>
                      <span className={`font-bold text-sm ${vendor.performance >= 98 ? 'text-green-600' : vendor.performance >= 95 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {vendor.performance}%
                      </span>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* System Alerts & Monitoring */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Alerts & Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSystemAlerts.map((alert, index) => <div key={index} className={`p-4 border rounded-lg ${alert.severity === 'High' ? 'border-red-200 bg-red-50' : alert.severity === 'Medium' ? 'border-yellow-200 bg-yellow-50' : 'border-blue-200 bg-blue-50'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={alert.severity === 'High' ? 'destructive' : alert.severity === 'Medium' ? 'default' : 'secondary'} className={alert.severity === 'Medium' ? 'bg-yellow-500' : ''}>
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.type}</span>
                    </div>
                    <p className="text-sm font-medium mb-2">{alert.message}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(alert.timestamp).toLocaleString()}
                      </span>
                      <Button size="sm" variant="outline" className="text-xs">
                        Investigate
                      </Button>
                    </div>
                  </div>)}
              </div>

              <div className="mt-6 p-4 bg-gov-blue/5 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm">System Health</h4>
                  <Badge variant="default" className="bg-green-500">Healthy</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">API Response:</span>
                    <span className="ml-2 font-medium text-green-600">&lt; 200ms</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">DB Queries:</span>
                    <span className="ml-2 font-medium text-green-600">&lt; 50ms</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>;
};
export default AdminDashboard;