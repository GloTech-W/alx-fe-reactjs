// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth(); // Get authentication status

  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
