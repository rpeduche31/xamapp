import { ButtonC } from './Button.styled';
import type { Props } from './type';

export const Button = (props: Props) => <ButtonC {...props} />;

Button.defaultProps = {
  colorScheme: 'twitter',
  variant: 'solid',
};

export default Button;
