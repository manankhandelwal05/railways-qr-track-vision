import React from 'react';
import { Layout } from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqData = [
  {
    question: "What is the QR-based Fittings Identification System?",
    answer: "The QR-based Fittings Identification System is a comprehensive digital solution implemented by Indian Railways to track, monitor, and manage railway track fittings and sleepers throughout their lifecycle. Each component is assigned a unique QR code for identification, tracking supply chain processes, inspection records, and warranty information."
  },
  {
    question: "How do I register as a vendor in the system?",
    answer: "To register as a vendor, click on 'Sign Up' and select 'Vendor' as your role. Fill in your company details, including organization name, contact information, and relevant certifications. Once submitted, your application will be reviewed by the admin team and you will receive approval notification via email."
  },
  {
    question: "What information is stored in the QR codes?",
    answer: "QR codes contain comprehensive information including: Manufacturing date and batch number, Vendor identification, Material specifications and grade, Quality test results, Installation location and date, Warranty period and expiry, Inspection history, and Performance tracking data."
  },
  {
    question: "How can field engineers scan and verify components?",
    answer: "Field engineers can use the mobile-friendly dashboard to scan QR codes using their device camera. The system instantly displays component details, installation history, warranty status, and any defect reports. Engineers can also report new defects or confirm installations directly through the mobile interface."
  },
  {
    question: "What happens when a component warranty expires?",
    answer: "The system automatically tracks warranty periods and generates alerts before expiry. Depot officers receive notifications about components nearing warranty expiry. The system maintains a dedicated 'Warranty Expiry' page showing all components requiring attention, enabling proactive maintenance scheduling."
  },
  {
    question: "How are defects and NCRs (Non-Conformance Reports) handled?",
    answer: "Inspectors can raise NCRs directly in the system by specifying the vendor, lot number, defect details, and uploading supporting documentation. The system tracks all NCRs, generates trend reports, and maintains vendor performance metrics based on defect rates."
  },
  {
    question: "Can the system integrate with existing railway management systems?",
    answer: "Yes, the system is designed with API endpoints for integration with existing UDM (Unified Data Management) and TMS (Track Management System) platforms. Admin users can configure integration settings and monitor data synchronization status."
  },
  {
    question: "What reports and analytics are available?",
    answer: "The system provides comprehensive reporting including: Vendor performance analytics, Defect trend analysis, Inventory status reports, Installation tracking, Warranty expiry forecasts, Quality metrics by lot/batch, and Audit trail logs for all user activities."
  }
];

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gov-blue mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Common questions and answers about the Indian Railways QR-based Fittings Identification System
          </p>
        </div>

        <Card>
          <CardHeader className="bg-gov-blue text-gov-blue-foreground">
            <CardTitle>System Information & Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium hover:text-gov-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader className="bg-railway-red text-railway-red-foreground">
            <CardTitle>Need Additional Help?</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 text-sm">
              <p>
                <strong>Technical Support:</strong> For technical issues or system access problems, 
                contact the helpdesk at <span className="text-railway-red">helpdesk@railways.gov.in</span>
              </p>
              <p>
                <strong>Training Resources:</strong> Visit the Learning section for comprehensive 
                guides, video tutorials, and documentation downloads.
              </p>
              <p>
                <strong>Vendor Registration:</strong> For vendor-related queries, contact the 
                vendor management team at <span className="text-railway-red">vendors@railways.gov.in</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FAQPage;