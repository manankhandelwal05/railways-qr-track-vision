import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  requiredRole?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles,
  requiredRole 
}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has required role
  if (requiredRole && user.role !== requiredRole) {
    const dashboardRoute = getDashboardRoute(user.role);
    return <Navigate to={dashboardRoute} replace />;
  }

  // Check if user's role is in allowed roles
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const dashboardRoute = getDashboardRoute(user.role);
    return <Navigate to={dashboardRoute} replace />;
  }

  return <>{children}</>;
};

const getDashboardRoute = (role: UserRole) => {
  switch (role) {
    case 'admin':
      return '/dashboard/admin';
    case 'staff':
      return '/dashboard/staff';
    case 'inspector':
      return '/dashboard/inspector';
    case 'user':
      return '/dashboard/user';
    default:
      return '/dashboard/user';
  }
};

export default ProtectedRoute;