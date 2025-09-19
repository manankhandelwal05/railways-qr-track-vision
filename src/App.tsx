import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ETenderPage from "./pages/ETenderPage";
import EAuctionPage from "./pages/EAuctionPage";
import ContractsPage from "./pages/ContractsPage";
import FAQPage from "./pages/FAQPage";
import LearningPage from "./pages/LearningPage";
import ApprovalPage from "./pages/ApprovalPage";
import SearchInventoryPage from "./pages/SearchInventoryPage";
import InspectionReportsPage from "./pages/InspectionReportsPage";
import QRScanRecordsPage from "./pages/QRScanRecordsPage";
import WarrantyExpiryPage from "./pages/WarrantyExpiryPage";
import VendorDashboard from "./pages/dashboards/VendorDashboard";
import DepotOfficerDashboard from "./pages/dashboards/DepotOfficerDashboard";
import InspectorDashboard from "./pages/dashboards/InspectorDashboard";
import FieldEngineerDashboard from "./pages/dashboards/FieldEngineerDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/e-tender" element={<ETenderPage />} />
            <Route path="/e-auction" element={<EAuctionPage />} />
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/approval" element={<ApprovalPage />} />
            <Route path="/search-inventory" element={<SearchInventoryPage />} />
            <Route path="/inspection-reports" element={<InspectionReportsPage />} />
            <Route path="/qr-scan-records" element={<QRScanRecordsPage />} />
            <Route path="/warranty-expiry" element={<WarrantyExpiryPage />} />
            <Route path="/dashboard/vendor" element={<VendorDashboard />} />
            <Route path="/dashboard/depot-officer" element={<DepotOfficerDashboard />} />
            <Route path="/dashboard/inspector" element={<InspectorDashboard />} />
            <Route path="/dashboard/field-engineer" element={<FieldEngineerDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
