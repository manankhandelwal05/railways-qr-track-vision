import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, MapPin, AlertTriangle, Wrench, Bell, Camera, CheckCircle, Clock } from 'lucide-react';

const mockInstallationStats = {
  totalInstallations: 245,
  thisWeek: 18,
  activeAlerts: 5,
  pendingReports: 3,
  warrantiesExpiring: 12
};

const mockRecentInstallations = [
  {
    id: 'INST/2024/025',
    itemName: 'Rail Clip Type A',
    qrCode: 'QR001234',
    trackLocation: 'KM 145.3, Mumbai-Pune Route',
    installationDate: '2024-01-18',
    status: 'Completed',
    gpsCoordinates: '19.0760° N, 72.8777° E'
  },
  {
    id: 'INST/2024/026',
    itemName: 'Concrete Sleeper PSC',
    qrCode: 'QR001235',
    trackLocation: 'KM 89.7, Delhi-Jaipur Route',
    installationDate: '2024-01-17',
    status: 'Completed',
    gpsCoordinates: '28.6139° N, 77.2090° E'
  }
];

const mockActiveAlerts = [
  {
    id: 'ALERT/001',
    type: 'Warranty Expiry',
    message: 'Rail Clip QR001237 warranty expires in 15 days',
    location: 'KM 234.5, Chennai-Bangalore Route',
    priority: 'High',
    date: '2024-01-18'
  },
  {
    id: 'ALERT/002',
    type: 'Defect Report',
    message: 'Wear detected on Fish Bolt QR001240',
    location: 'KM 67.2, Kolkata-Howrah Route',
    priority: 'Critical',
    date: '2024-01-17'
  }
];

const FieldEngineerDashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Field Engineer Dashboard</h1>
          <p className="text-muted-foreground">
            Manage installations, scan components, and report field issues
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Installs</p>
                  <p className="text-2xl font-bold text-gov-blue">{mockInstallationStats.totalInstallations}</p>
                </div>
                <Wrench className="h-8 w-8 text-gov-blue" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold text-green-600">{mockInstallationStats.thisWeek}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Alerts</p>
                  <p className="text-2xl font-bold text-red-600">{mockInstallationStats.activeAlerts}</p>
                </div>
                <Bell className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Reports</p>
                  <p className="text-2xl font-bold text-yellow-600">{mockInstallationStats.pendingReports}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Warranties Expiring</p>
                  <p className="text-2xl font-bold text-orange-600">{mockInstallationStats.warrantiesExpiring}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile-First Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gov-blue text-gov-blue-foreground hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <QrCode className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Scan & Install</h3>
              <p className="text-sm opacity-90 mb-4">
                Scan QR code and confirm installation
              </p>
              <Button variant="secondary" className="w-full">
                Start Scanning
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Wrench className="h-12 w-12 mx-auto mb-4 text-gov-blue" />
              <h3 className="text-lg font-semibold mb-2">My Installations</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View installation history and records
              </p>
              <Button variant="outline" className="w-full">View Installations</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Camera className="h-12 w-12 mx-auto mb-4 text-railway-red" />
              <h3 className="text-lg font-semibold mb-2">Report Defect</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Report defects with photo evidence
              </p>
              <Button variant="outline" className="w-full border-railway-red text-railway-red hover:bg-railway-red hover:text-white">
                Report Issue
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Bell className="h-12 w-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-lg font-semibold mb-2">Active Alerts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                View priority alerts and notifications
              </p>
              <Button variant="outline" className="w-full">View Alerts</Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Installations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Recent Installations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockRecentInstallations.map((installation) => (
                  <div key={installation.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gov-blue">{installation.itemName}</h4>
                        <p className="text-sm text-muted-foreground">QR: {installation.qrCode}</p>
                      </div>
                      <Badge variant="default" className="bg-green-500">
                        {installation.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{installation.trackLocation}</span>
                      </div>
                      <div>
                        <span className="font-medium">Date:</span> {new Date(installation.installationDate).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        GPS: {installation.gpsCoordinates}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      View Installation Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockActiveAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 border rounded-lg ${
                    alert.priority === 'Critical' ? 'border-red-200 bg-red-50' :
                    alert.priority === 'High' ? 'border-orange-200 bg-orange-50' : 'border-yellow-200 bg-yellow-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={
                        alert.priority === 'Critical' ? 'destructive' :
                        alert.priority === 'High' ? 'default' : 'secondary'
                      } className={
                        alert.priority === 'High' ? 'bg-orange-500' : ''
                      }>
                        {alert.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{alert.type}</span>
                    </div>
                    <p className="text-sm font-medium mb-2">{alert.message}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3" />
                      <span>{alert.location}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className={`w-full ${
                        alert.priority === 'Critical' ? 'bg-red-600 hover:bg-red-700' : ''
                      }`}
                    >
                      Take Action
                    </Button>
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

export default FieldEngineerDashboard;