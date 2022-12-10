import styled from '@emotion/styled';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';

export const PaginationContainer = styled('div')(({ theme }: any) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.rc-pagination-jump-next, .rc-pagination-jump-prev': {
    pointerEvents: 'none',
    '> div': {
      pointerEvents: 'none',
    },
  },
  ul: {
    userSelect: 'none',
    padding: 0,
    display: 'flex',
    margin: 0,
    '> li': {
      listStyle: 'none',
      marginLeft: -1,
      fontSize: 14,
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: `1px solid ${theme.colors.border.whiteBorder}`,
      color: theme.colors.text.paginationColor,
      '&.rc-pagination-item-active': {
        backgroundColor: theme.colors.background.whiteBg,
        color: theme.colors.text.paginationColor,
        fontWeight: 'bold',
      },
    },
  },
}));

export const IconContainer = styled('div')(({ hide, theme }: any) => ({
  color: hide ? theme.colors.icon.paginationDisabledIcon : 'inherit',
  '&:hover': {
    cursor: hide ? 'not-allowed' : 'pointer',
  },
}));

export const Nav = styled('a')(({ theme }: any) => ({
  border: `1px solid ${theme.colors.gray[200]}`,
  borderBottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRight: 0,
  background: theme.colors.white,
  '&:first-of-type': {
    borderTopLeftRadius: 26,
  },
  '&:last-of-type': {
    borderTopRightRadius: 26,
    borderRight: `1px solid ${theme.colors.gray[200]} !important`,
  },
}));

export const NavText = styled('span')(({ theme: { colors }, active }: any) => ({
  borderBottom: active
    ? `3px solid ${colors.blue[400]}`
    : '3px solid transparent',
  padding: '18px 30px',
  color: active ? colors.blue[400] : colors.gray[900],
  fontSize: 18,
  fontWeight: 500,
  transition: 'color 0.3s ease-in-out, border-color 0.3s ease-in-out',
  ':hover': {
    color: colors.blue[400],
  },
}));

export const IconButton = styled(ChakraIconButton)(({ theme }: any) => ({
  padding: 5,
  height: 'auto',
  borderRadius: 26,
}));
