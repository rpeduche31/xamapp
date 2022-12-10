import { IconButton as ChakraIconButton } from './Table.styled';
import type { IconButtonProps } from '@chakra-ui/react';

/// add initial props in icon button use in table
const IconButton = (props: IconButtonProps) => (
  <ChakraIconButton
    color={props.color || 'blue.400'}
    variant="ghost"
    {...props}
  />
);

export default IconButton;
