import {
  useState,
  SyntheticEvent,
  useRef,
  MutableRefObject,
  useEffect,
} from 'react';
import { Flex, Icon, Spinner } from '@chakra-ui/react';
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import { ClickOutSide } from '../../components/ClickOutSide';
import Options from './Options';
import type { Props, OptionKeyProps } from './type';
import {
  SelectWrapper,
  ErrorMessage,
  InputComponent,
  Button,
  Label,
  Wrapper,
  InputWrapper,
  Value,
} from './Select.styled';

const getOptionList = (
  text: string,
  optionList: Array<any>,
  label: OptionKeyProps['label']
): Array<any> => {
  const newOptionList = optionList.filter((item) =>
    item[label].toLowerCase().includes(text.toLowerCase())
  );
  return newOptionList;
};

const getLabel = (
  value: string | number,
  options: Array<any>,
  optionKeys: OptionKeyProps
): string => {
  const rowItem = options.find((item) => item[optionKeys.value] === value);
  return rowItem?.[optionKeys.label] || '';
};

const Select = ({
  disabled = false,
  errorMessage,
  isError,
  label,
  options,
  onChange,
  value,
  optionKeys = {
    label: 'label',
    value: 'value',
  },
  isLoading = false,
  icon,
  placeholder,
  iconClear,
  onClear,
  readOnly,
  disableDropDown,
  handleCustomFunction,
}: Props) => {
  const [text, setText] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<Array<any>>([]);

  useEffect(() => {
    setOptionList(options);
  }, [options]);

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const onChangeInput = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    const newList = getOptionList(value, options, optionKeys.label);
    setOptionList(newList);
    setText(value);
  };

  const onClickButton = () => {
    if (disableDropDown) {
      handleCustomFunction && handleCustomFunction();
    } else {
      if (!disabled) {
        setIsFocus(true);
        inputRef?.current.focus();
      }
    }
  };

  const onSelect = (newValue: string | number) => {
    onChange(newValue);
    setIsFocus(false);
    setText('');
    setOptionList(options);
  };

  return (
    <ClickOutSide
      onClickOutside={() => setIsFocus(false)}
      wrapperElement={Wrapper}>
      <SelectWrapper
        onClick={onClickButton}
        disabled={disabled}
        isError={isError}
        isFocus={isFocus}>
        <Flex>
          <InputWrapper>
            <InputComponent
              readOnly={readOnly ? readOnly : false}
              ref={inputRef}
              value={text}
              disabled={disabled}
              onChange={onChangeInput}
              placeholder={value ? '' : placeholder}
            />
            {!text.length && !!value && (
              <Value>{getLabel(value, options, optionKeys)}</Value>
            )}
          </InputWrapper>
          {isLoading && (
            <Button tabIndex={-1} type='button'>
              <Spinner height='15px' width='15px' color='gray.800' />
            </Button>
          )}
          {onClear && !!value && (
            <Button tabIndex={-1} onClick={() => onClear?.('')} type='button'>
              {iconClear || (
                <Icon as={CloseIcon} color='gray.500' w={3} h={3} />
              )}
            </Button>
          )}
          <Button tabIndex={-1} onClick={onClickButton} type='button'>
            {icon || <Icon as={ChevronDownIcon} color='gray.800' />}
          </Button>
        </Flex>
        <Label
          disabled={disabled}
          isError={isError}
          isTop={isFocus || text.length > 0 || !!value}>
          {label}
        </Label>
      </SelectWrapper>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {isFocus && (
        <Options
          optionKeys={optionKeys}
          onSelect={onSelect}
          options={optionList}
        />
      )}
    </ClickOutSide>
  );
};

export default Select;
