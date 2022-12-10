import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Wrapper = styled(Flex)(({ theme }: any) => ({
  width: '100%',
  height: '100px',
  padding: '25px 40px 25px 36px',
  boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.1)',
  alignItems: 'center',
  zIndex: 999,
  backgroundColor: theme.colors.white,
  fontSize: 24,
  fontWeight: 'bold',
  justifyContent: 'space-between'
}));
