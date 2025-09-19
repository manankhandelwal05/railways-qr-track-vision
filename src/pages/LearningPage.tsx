import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Play, FileText, Users, Clock } from 'lucide-react';

const learningResources = [
  {
    id: 1,
    title: 'QR System Overview & Getting Started',
    type: 'Video Tutorial',
    duration: '15 mins',
    level: 'Beginner',
    description: 'Complete introduction to the QR-based Fittings Identification System',
    icon: Play,
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Vendor Registration & Onboarding Guide',
    type: 'PDF Document',
    duration: '8 pages',
    level: 'Beginner',
    description: 'Step-by-step guide for vendor registration and system access',
    icon: FileText,
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'QR Code Generation and Marking Procedures',
    type: 'PDF Document',
    duration: '12 pages',
    level: 'Intermediate',
    description: 'Technical guidelines for QR code generation and component marking',
    icon: FileText,
    downloadUrl: '#'
  },
  {
    id: 4,
    title: 'Field Engineer Mobile App Training',
    type: 'Video Tutorial',
    duration: '20 mins',
    level: 'Beginner',
    description: 'How to use the mobile interface for scanning and reporting',
    icon: Play,
    downloadUrl: '#'
  },
  {
    id: 5,
    title: 'Inspection and NCR Management',
    type: 'Video Tutorial',
    duration: '25 mins',
    level: 'Intermediate',
    description: 'Complete guide to inspection processes and NCR reporting',
    icon: Play,
    downloadUrl: '#'
  },
  {
    id: 6,
    title: 'Quality Standards for Railway Fittings',
    type: 'PDF Document',
    duration: '25 pages',
    level: 'Advanced',
    description: 'Comprehensive quality standards and testing procedures',
    icon: FileText,
    downloadUrl: '#'
  },
  {
    id: 7,
    title: 'System Integration and API Documentation',
    type: 'PDF Document',
    duration: '18 pages',
    level: 'Advanced',
    description: 'Technical documentation for system integrators and developers',
    icon: FileText,
    downloadUrl: '#'
  },
  {
    id: 8,
    title: 'Depot Officer Dashboard Training',
    type: 'Video Tutorial',
    duration: '18 mins',
    level: 'Intermediate',
    description: 'How to manage shipments, inventory, and sample checks',
    icon: Play,
    downloadUrl: '#'
  }
];

const LearningPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Learning Resources</h1>
          <p className="text-muted-foreground">
            Comprehensive training materials, guides, and documentation for the QR Fittings System
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningResources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gov-blue/10">
                        <IconComponent className="h-5 w-5 text-gov-blue" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    <Badge 
                      variant={
                        resource.level === 'Beginner' ? 'default' :
                        resource.level === 'Intermediate' ? 'secondary' : 'outline'
                      }
                      className="text-xs"
                    >
                      {resource.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-snug">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{resource.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>All Roles</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-2 text-gov-blue border-gov-blue hover:bg-gov-blue hover:text-white"
                    onClick={() => window.open(resource.downloadUrl, '_blank')}
                  >
                    <Download className="h-4 w-4" />
                    {resource.type === 'Video Tutorial' ? 'Watch Video' : 'Download PDF'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8">
          <CardHeader className="bg-gov-gold text-gov-gold-foreground">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Training Schedule & Certification
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Upcoming Training Sessions</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Vendor Onboarding Workshop - Feb 15, 2024</li>
                    <li>• Inspector Certification Program - Feb 22, 2024</li>
                    <li>• System Administrator Training - Mar 1, 2024</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Certification Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Complete role-specific training modules</li>
                    <li>• Pass online assessment (80% minimum)</li>
                    <li>• Practical demonstration for field roles</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LearningPage;