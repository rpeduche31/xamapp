import styled from '@emotion/styled';

interface LabelProps {
  isTop: boolean;
  isError: boolean;
  disabled?: boolean;
  theme?: any;
}

export const Label = styled('label')((props: LabelProps) => ({
  display: 'block',
  position: 'absolute',
  transform: 'translate(0, -50%)',
  zIndex: 9,
  transition: '0.25s',
  pointerEvents: 'none',
  fontSize: props.isTop ? '12px' : '16px',
  top: props.isTop ? '12px' : '50%',
  color: 'gray',
}));

export const InputComponent = styled('input')((props) => ({
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  width: '100%',
  border: 0,
  outline: 0,
  flex: '1 1 0%',
}));

interface InputWrapperProps {
  isError: boolean;
  disabled?: boolean;
  theme?: any;
}

const getInputWrapperBorderColor = (props: InputWrapperProps): string => {
  if (props.disabled) {
    return props?.theme?.colors?.gray['100'];
  }
  return props.isError
    ? props?.theme?.colors?.red['500']
    : props?.theme?.colors?.blue['500'];
};

export const InputWrapper = styled('div')(
  ({theme, disabled, isError}: InputWrapperProps) => ({
    position: 'relative',
    padding: '20px 18px !important',
    borderRadius: '26px',
    borderWidth: '1px !important',
    backgroundColor: disabled ? theme?.colors?.gray['200'] : 'white',
    borderColor:
      !isError || disabled
        ? theme?.colors?.gray['400']
        : theme?.colors?.red['500'],
    '&:hover': {
      borderColor: getInputWrapperBorderColor({theme, disabled, isError}),
    },
    '&:focus-within': {
      borderColor: getInputWrapperBorderColor({theme, disabled, isError}),
    },
  })
);

export const ErrorMessage = styled('span')(({theme}: any) => ({
  margin: '8px 18px 0',
  fontSize: '12px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'left',
  color: 'red',
  display: 'block',
}));

export const Button = styled('button')(() => ({
  padding: '0 10px',
  ':disabled': {
    cursor: 'not-allowed',
  },
}));
