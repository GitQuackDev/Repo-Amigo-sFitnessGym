import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth(); 

  if (loading) {
    
    
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white', backgroundColor: '#181818' }}>
        Loading authentication status...
      </div>
    );
  }

  if (!isAuthenticated) { 
    
    return <Navigate to="/admin/login" replace />;
  }

  return children; 
};

export default ProtectedRoute;
