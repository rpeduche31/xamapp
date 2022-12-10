import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import TableList from './TableList';

const Home: React.FC<{}> = () => {
  return (
    <Flex align='center' justifyContent='center' flexDir='column'>
      <Box w='90%' mt='25px' pb='35px'>
        <TableList />
      </Box>
    </Flex>
  );
};

export default Home;
