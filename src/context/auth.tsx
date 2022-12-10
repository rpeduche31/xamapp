import { useState, createContext, useContext, useEffect, Context, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { closeLoader } from '../components/Loader';
type valueProps = {
  user: string | null;
  login: () => void;
  logout: () => void;
  loading: boolean;
};

const AuthContext: Context<{} | valueProps> = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const user_session = sessionStorage.getItem('username');
    if (user_session) {
      setUser(user_session);
    }
  }, []);

  const login = (branchId: string, username: string, password: string) => {
    sessionStorage.setItem('branchId', branchId);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    setUser(username);
    setTimeout(() => {
      closeLoader();
      navigate('/');
    }, 1500);
  };

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      loading,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth: any = () => {
  return useContext(AuthContext);
};
