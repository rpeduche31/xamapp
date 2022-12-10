import { Home, Login } from '../pages';
import { ProtectedRoute } from '../components/ProtectedRoute';
import Layout from '../layout/Layout';

export const Routes = [
  {
    path: '/',
    name: 'Home',
    key: 'home',
    element: <Home />,
    exact: true,
    private: true,
  },
  {
    path: '/login',
    name: 'Login',
    key: 'login',
    element: <Login />,
    exact: true,
    private: false,
  },
];

export const NewRoutes = Routes.map((item) => {
  if (item.private) {
    return {
      ...item,
      element: (
        <ProtectedRoute>
          <Layout>{item.element}</Layout>
        </ProtectedRoute>
      ),
    };
  } else {
    return item;
  }
});
