import styled from '@emotion/styled';

interface LabelProps {
  isTop: boolean;
  isError: boolean;
  disabled?: boolean;
  theme?: any;
}

const getLabelColor = (props: LabelProps): string => {
  if (props.disabled) {
    return props.theme.colors.gray[500];
  }
  if (props.isError) {
    return props.theme.colors.red[500];
  }
  return props.isTop ? props.theme.colors.blue[500] : props.theme.colors.gray[500];
};

export const Label = styled('label')((props: LabelProps) => ({
  display: 'block',
  position: 'absolute',
  transform: 'translate(0, -50%)',
  zIndex: 9,
  transition: '0.25s',
  pointerEvents: 'none',
  fontSize: props.isTop ? '12px' : '16px',
  top: props.isTop ? '12px' : '50%',
  color: getLabelColor(props),
}));

export const InputWrapper = styled('div')(() => ({
  flex: '1 1 0%',
  width: '100%',
  position: 'relative',
  height: 21,
}));

export const InputComponent = styled('input')(() => ({
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
  position: 'absolute',
  top: 0,
}));

export const Value = styled('div')(() => ({
  fontSize: '16px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  position: 'absolute',
  display: 'flex',
  top: 0,
  width: '100%',
}));

interface SelectWrapperProps {
  isError: boolean;
  disabled?: boolean;
  theme?: any;
  isFocus: boolean;
}

const getSelectWrapperBorderColor = (props: any): string => {
  if (props.disabled) {
    return props.theme.colors.gray[100];
  }
  return props.isError && !props.isFocus
    ? props.theme.colors.red[500]
    : props.theme.colors.gray[100];
};

export const SelectWrapper = styled('div')((props: SelectWrapperProps) => {
  const {theme, disabled, isError, isFocus} = props;
  return {
    position: 'relative',
    padding: '20px 18px !important',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderBottomLeftRadius: isFocus ? 0 : 26,
    borderBottomRightRadius: isFocus ? 0 : 26,
    borderWidth: '1px !important',
    // borderBottomWidth: isFocus ? 0 : 1,
    backgroundColor: disabled ? theme.colors.gray[200] : 'white',
    borderColor: !isError || disabled ? theme.colors.gray[400] : theme.colors.red[500],
    '&:hover': {
      borderColor: getSelectWrapperBorderColor(props),
    },
    '&:focus-within': {
      borderColor: getSelectWrapperBorderColor(props),
    },
  };
});

export const ErrorMessage = styled('span')(({theme}: any) => ({
  margin: '8px 18px 0',
  // position: 'absolute',
  // bottom: -22,
  // left: 18,
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
  padding: '0 5px',
  display: 'flex',
  alignItems: 'center',
}));

export const SelectOptionWrapper = styled('div')(({theme}: any) => {
  return {
    top: 60,
    position: 'absolute',
    maxHeight: 300,
    overflowY: 'auto',
    width: '100%',
    border: `1px solid ${theme.colors.gray[200]}`,
    zIndex: 99,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    backgroundColor: theme.colors.white,
    transition: 'background-color 0.3s ease',
    '::-webkit-scrollbar': {
      width: 6,
      height: 6,
      overflow: 'hidden',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: theme.colors.gray[300],
      borderRadius: 26,
    },
  };
});

export const Option = styled('button')(
  ({theme, disabled = false, justifyContent = 'initial'}: any) => ({
    justifyContent,
    width: '100%',
    height: 60,
    padding: '0 20px',
    alignItems: 'center',
    display: 'flex',
    borderBottom: `1px solid ${theme.colors.gray[200]}`,
    color: disabled ? theme.colors.gray[400] : theme.colors.black,
    cursor: 'initial',
    '&:hover': {
      backgroundColor: disabled ? 'initial' : theme.colors.blue[300],
    },
  })
);

export const Wrapper = styled('div')(() => ({
  position: 'relative',
}));
