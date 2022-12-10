import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from '../src/context/auth';
import { UserListProvider } from '../src/context/userLists';

import theme from './theme';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { NewRoutes } from '../src/constants/routes';

function App() {
  const MapRoutes = () => {
    return useRoutes(NewRoutes);
  };

  return (
    <Router>
      <AuthProvider>
        <UserListProvider>
          <ChakraProvider theme={theme}>
            <MapRoutes />
          </ChakraProvider>
        </UserListProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
