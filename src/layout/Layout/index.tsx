import React, { ReactNode } from 'react';
import Header from './../Header';
import { Flex, Box } from '@chakra-ui/react';
import { useAuth } from '../../context/auth';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const headerHeight = 100;
  const headerProps = {
    username: user,
    logoutUser: () => {
      logout();
    },
  };

  return (
    <>
      <Box>
        <Header {...headerProps} />
        <Flex>
          <Box w='100%' h={`calc(100vh - ${headerHeight}px)`} overflowX='hidden' overflowY='auto'>
            {children}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
