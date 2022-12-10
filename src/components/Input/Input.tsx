import React, {useEffect} from 'react';
import {useState} from 'react';
import {Props} from './type';
import {Flex} from '@chakra-ui/react';
import {InputComponent, InputWrapper, Label, ErrorMessage, Button} from './Input.styled';

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    disabled,
    isError,
    errorMessage,
    label,
    onBlur = () => {},
    defaultValue = '',
    button,
    buttonType,
    wrapperStyles = {},
    onButtonClick = () => {},
    buttonDisabled = false,
    inputstyles = {},
    ...rest
  } = props;

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(false);

  useEffect(() => {
    setHasValue(defaultValue.length > 0);
  }, [defaultValue]);

  const handleBlur = (e: any) => {
    setIsFocus(false);
    setHasValue((e.currentTarget?.value || '').length > 0);
    onBlur(e);
  };

  const buttonComponent =
    buttonType === 'button' ? (
      <Button onClick={onButtonClick} type={buttonType} disabled={disabled || buttonDisabled}>
        {button}
      </Button>
    ) : (
      <Button type={buttonType} disabled={disabled || buttonDisabled}>
        {button}
      </Button>
    );

  return (
    <>
      <InputWrapper style={wrapperStyles} disabled={disabled} isError={isError}>
        <Flex w='100%'>
          <InputComponent
            id={'input-component'}
            ref={ref}
            autoComplete='off'
            defaultValue={defaultValue}
            disabled={disabled}
            onFocus={() => setIsFocus(true)}
            onBlur={handleBlur}
            {...rest}
            {...inputstyles}
          />
          {button && buttonComponent}
        </Flex>
        <Label htmlFor='input-component' aria-labelledby="input-component" disabled={disabled} isError={isError} isTop={isFocus || hasValue}>
          {label}
        </Label>
      </InputWrapper>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
});

Input.displayName = 'Search';

export default Input;
