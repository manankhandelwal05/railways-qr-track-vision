import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, XCircle, Building, Calendar, Phone, Mail } from 'lucide-react';

const mockVendorApplications = [
  {
    id: 'VEN/2024/001',
    companyName: 'Steel Rail Components Pvt Ltd',
    contactPerson: 'Rajesh Kumar',
    email: 'rajesh@steelrail.com',
    phone: '+91 9876543210',
    location: 'Mumbai, Maharashtra',
    specialization: 'Railway Track Fittings',
    applicationDate: '2024-01-15',
    documents: ['GST Certificate', 'ISO 9001', 'Railway Approval'],
    status: 'Pending Review',
    experienceYears: 15
  },
  {
    id: 'VEN/2024/002',
    companyName: 'QR Tech Solutions India',
    contactPerson: 'Priya Sharma',
    email: 'priya@qrtech.in',
    phone: '+91 9123456789',
    location: 'Bangalore, Karnataka',
    specialization: 'QR Code Technology & Systems',
    applicationDate: '2024-01-12',
    documents: ['Company Registration', 'IT Service Certificate', 'Previous Work Portfolio'],
    status: 'Approved',
    experienceYears: 8
  },
  {
    id: 'VEN/2024/003',
    companyName: 'Concrete Sleepers Manufacturing Co',
    contactPerson: 'Amit Patel',
    email: 'amit@concretesleepers.com',
    phone: '+91 9988776655',
    location: 'Ahmedabad, Gujarat',
    specialization: 'Prestressed Concrete Sleepers',
    applicationDate: '2024-01-10',
    documents: ['Manufacturing License', 'Quality Certificates', 'BIS Certification'],
    status: 'Under Verification',
    experienceYears: 20
  },
  {
    id: 'VEN/2024/004',
    companyName: 'Railway Safety Systems Ltd',
    contactPerson: 'Sunita Reddy',
    email: 'sunita@railwaysafety.com',
    phone: '+91 9834567890',
    location: 'Hyderabad, Telangana',
    specialization: 'Safety & Inspection Equipment',
    applicationDate: '2024-01-08',
    documents: ['Safety Compliance Certificate', 'Equipment Calibration Reports'],
    status: 'Rejected',
    experienceYears: 5,
    rejectionReason: 'Insufficient railway experience documentation'
  }
];

const ApprovalPage: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'Rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'default';
      case 'Rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Vendor Approval Management</h1>
          <p className="text-muted-foreground">
            Review and manage vendor applications for the Railway QR Fittings System
          </p>
        </div>

        <div className="grid gap-6">
          {mockVendorApplications.map((vendor) => (
            <Card key={vendor.id} className="border-l-4 border-l-gov-gold">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-gov-blue" />
                    <div>
                      <CardTitle className="text-xl text-gov-blue">{vendor.companyName}</CardTitle>
                      <p className="text-sm text-muted-foreground">Application ID: {vendor.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(vendor.status)}
                    <Badge variant={getStatusVariant(vendor.status)}>
                      {vendor.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Contact Information</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Contact Person:</span>
                          <span>{vendor.contactPerson}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>{vendor.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>{vendor.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span>{vendor.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Business Details</h4>
                      <div className="space-y-1 text-sm">
                        <div><span className="font-medium">Specialization:</span> {vendor.specialization}</div>
                        <div><span className="font-medium">Experience:</span> {vendor.experienceYears} years</div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>Applied: {new Date(vendor.applicationDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gov-blue mb-2">Submitted Documents</h4>
                      <div className="flex flex-wrap gap-2">
                        {vendor.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {vendor.status === 'Rejected' && vendor.rejectionReason && (
                      <div>
                        <h4 className="font-semibold text-sm text-red-600 mb-2">Rejection Reason</h4>
                        <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
                          {vendor.rejectionReason}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      {vendor.status === 'Pending Review' && (
                        <>
                          <Button size="sm" className="flex-1">
                            Approve Vendor
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Request More Info
                          </Button>
                          <Button variant="destructive" size="sm" className="flex-1">
                            Reject
                          </Button>
                        </>
                      )}
                      {vendor.status === 'Under Verification' && (
                        <Button variant="outline" size="sm" className="w-full">
                          View Verification Status
                        </Button>
                      )}
                      {(vendor.status === 'Approved' || vendor.status === 'Rejected') && (
                        <Button variant="outline" size="sm" className="w-full">
                          View Complete Application
                        </Button>
                      )}
                    </div>
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

export default ApprovalPage;