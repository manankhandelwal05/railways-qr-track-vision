import React from 'react';
import { Layout } from '@/components/Layout';
import { HeroBanner } from '@/components/HeroBanner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Package, QrCode, Shield } from 'lucide-react';
import railwayFittings from '@/assets/railway-fittings.jpg';
import railwayMaintenance from '@/assets/railway-maintenance.jpg';

const Index = () => {
  const keyFeatures = [
    {
      icon: QrCode,
      title: 'QR Code Tracking',
      description: 'Complete lifecycle tracking of railway components with unique QR identification'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Specialized dashboards for vendors, inspectors, depot officers, and field engineers'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking across multiple railway depots and locations'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive inspection reports and Non-Conformance Report (NCR) management'
    }
  ];

  return (
    <Layout>
      <HeroBanner />
      
      <div className="container mx-auto px-6 py-12">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-gov-blue/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-gov-blue" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${railwayFittings})` }}></div>
            <CardHeader>
              <CardTitle>Advanced QR Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our system uses cutting-edge QR code technology to track every railway component from manufacturing to installation, ensuring complete transparency and accountability.
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card>
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${railwayMaintenance})` }}></div>
            <CardHeader>
              <CardTitle>Professional Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Streamlined maintenance processes with real-time monitoring, predictive analytics, and comprehensive reporting for optimal railway safety and performance.
              </p>
              <Button variant="outline" className="flex items-center gap-2">
                Explore Features <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gov-blue text-gov-blue-foreground text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-6">
              Join the Indian Railways QR-based Fittings Identification System today
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg">Sign Up Now</Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gov-blue">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
