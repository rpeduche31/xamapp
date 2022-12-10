import {ReactNode, CSSProperties} from 'react';

export interface Props {
  label: string;
  onChange?: any;
  onBlur?: (e: any) => void;
  isError: boolean;
  errorMessage?: string;
  type?: string;
  disabled?: boolean;
  defaultValue?: string;
  button?: ReactNode;
  buttonType?: 'submit' | 'reset' | 'button';
  wrapperStyles?: CSSProperties;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
  isFocus?: boolean;
  autoFocus?: boolean;
  inputstyles?: any;
}
