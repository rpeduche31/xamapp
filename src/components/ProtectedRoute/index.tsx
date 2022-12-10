import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

export const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to='/login' />;
  }
  return children;
};
