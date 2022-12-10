import styled from '@emotion/styled';
import { Box, Flex } from '@chakra-ui/layout';

export const CardContainer = styled(Box)({
  width: 441,
  maxWidth: 411,
  margin: '50px auto 0',
});

export const Card = styled(Box)(({ theme, p }: any) => ({
  padding: p ?? '36px',
  boxSizing: 'border-box',
  background: 'white',
  outline: `1px solid gray`,
  margin: '0 auto',
  borderRadius: 26,
}));

export const CardRow = styled(Box)({
  display: 'flex',
  marginBottom: 20,
  paddingBottom: 0,
  justifyContent: 'inherit',
});

export const CardTitle = styled(Flex)({
  marginBottom: 30,
  marginTop: 0,
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 'normal',
});
