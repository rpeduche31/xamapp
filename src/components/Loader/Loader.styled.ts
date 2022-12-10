import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Wrapper = styled(Flex)(({ theme }: any) => ({
  top: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  backdropFilter: '10px',
  backgroundColor: '#0000004a',
  zIndex: 9999,
}));

export const HeaderCover = styled(Flex)(({ theme }: any) => ({
  position: 'absolute',
  width: '100vw',
  top: 0,
  zIndex: 9999,
  height: 90,
}));
