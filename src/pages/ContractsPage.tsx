import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Building } from 'lucide-react';

const mockContracts = [
  {
    id: 'CON/2024/001',
    vendorName: 'Steel Rail Components Pvt Ltd',
    contractType: 'Supply Contract',
    description: 'Supply of railway track fittings and components with QR coding',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    value: '₹2,50,00,000',
    status: 'Active',
    completionPercentage: 65
  },
  {
    id: 'CON/2024/002',
    vendorName: 'QR Tech Solutions India',
    contractType: 'Service Contract',
    description: 'QR code implementation and maintenance services',
    startDate: '2023-12-01',
    endDate: '2024-11-30',
    value: '₹75,00,000',
    status: 'Active',
    completionPercentage: 80
  },
  {
    id: 'CON/2023/015',
    vendorName: 'Concrete Sleepers Manufacturing Co',
    contractType: 'Manufacturing Contract',
    description: 'Manufacturing and supply of prestressed concrete sleepers',
    startDate: '2023-06-01',
    endDate: '2024-01-15',
    value: '₹5,00,00,000',
    status: 'Completed',
    completionPercentage: 100
  },
  {
    id: 'CON/2024/003',
    vendorName: 'Railway Safety Systems Ltd',
    contractType: 'Maintenance Contract',
    description: 'Inspection and maintenance services for track components',
    startDate: '2024-02-01',
    endDate: '2025-01-31',
    value: '₹1,25,00,000',
    status: 'Pending',
    completionPercentage: 0
  }
];

const ContractsPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Contracts</h1>
          <p className="text-muted-foreground">
            View and manage all contracts related to railway fittings and QR system implementation
          </p>
        </div>

        <div className="grid gap-6">
          {mockContracts.map((contract) => (
            <Card key={contract.id} className="border-l-4 border-l-gov-gold">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-gov-blue">{contract.vendorName}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Contract ID: {contract.id} • {contract.contractType}
                    </p>
                  </div>
                  <Badge 
                    variant={
                      contract.status === 'Active' ? 'default' : 
                      contract.status === 'Completed' ? 'secondary' : 
                      'outline'
                    }
                    className={
                      contract.status === 'Active' ? 'bg-green-500' : 
                      contract.status === 'Completed' ? 'bg-blue-500' : ''
                    }
                  >
                    {contract.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{contract.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Start: {new Date(contract.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-railway-red" />
                    <span>End: {new Date(contract.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>Value: {contract.value}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Completion Progress</span>
                    <span className="text-sm text-muted-foreground">{contract.completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gov-blue h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${contract.completionPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    View Contract Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContractsPage;