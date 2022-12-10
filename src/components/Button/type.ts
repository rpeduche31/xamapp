import { ButtonProps } from '@chakra-ui/react';

export interface Props extends Omit<ButtonProps, 'colorScheme'> {
  colorScheme?: 'gray' | 'blue' | 'red';
}
