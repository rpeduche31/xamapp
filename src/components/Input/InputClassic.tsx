import { CSSProperties, ReactNode, SyntheticEvent, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import {
  InputComponent,
  InputWrapper,
  Label,
  ErrorMessage,
  Button,
} from './Input.styled';
import type { InputProps } from '@chakra-ui/react';

interface Props extends Omit<InputProps, 'onChange'> {
  label: string;
  onChange: (value: string) => void;
  isError: boolean;
  errorMessage?: string;
  type?: string;
  disabled?: boolean;
  button?: ReactNode;
  buttonType?: 'submit' | 'reset' | 'button';
  value: string;
  wrapperStyles?: CSSProperties;
  onButtonClick?: () => void;
}

const InputClassic = ({
  label,
  onChange,
  isError,
  errorMessage = '',
  type = 'text',
  disabled = false,
  button,
  buttonType = 'button',
  value,
  wrapperStyles,
  onButtonClick = () => {},
}: Props) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleChange = (e: SyntheticEvent) => {
    const { value: newValue } = e.target as HTMLInputElement;
    onChange(newValue);
  };

  const buttonComponent =
    buttonType === 'button' ? (
      <Button onClick={onButtonClick} type={buttonType} disabled={disabled}>
        {button}
      </Button>
    ) : (
      <Button type={buttonType} disabled={disabled}>
        {button}
      </Button>
    );

  return (
    <>
      <InputWrapper style={wrapperStyles} disabled={disabled} isError={isError}>
        <Flex w="100%">
          <InputComponent
            autoComplete="off"
            value={value}
            disabled={disabled}
            onFocus={() => setIsFocus(true)}
            type={type}
            onChange={handleChange}
            onBlur={() => setIsFocus(false)}
          />
          {button && buttonComponent}
        </Flex>
        <Label
          disabled={disabled}
          isError={isError}
          isTop={isFocus || `${value}`.length > 0}
        >
          {label}
        </Label>
      </InputWrapper>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default InputClassic;
