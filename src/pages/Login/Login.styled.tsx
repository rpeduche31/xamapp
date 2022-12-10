import { Box, Flex, Text, Image, Icon } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const LoginMessage = styled(Text)(({ theme }: any) => ({
  margin: '44px 0 30px',
  fontSize: 24,
  fontWeight: 700,
  color: theme.colors.text.headerNameColor,
}));

export const Wrapper = styled(Flex)(({ theme }: any) => ({
  minHeight: '100vh',
  alignItems: 'center',
  backgroundColor: theme?.colors?.gray[100],
  flexDirection: 'column',
}));
