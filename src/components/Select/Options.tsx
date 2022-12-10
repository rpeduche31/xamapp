import { FC, ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import { SelectOptionWrapper as Wrapper, Option } from './Select.styled';
import type { OptionKeyProps } from './type';

const Options: FC<{
  options: Array<any>;
  onSelect: (value: string | number) => void;
  optionKeys: OptionKeyProps;
  loading?: boolean;
  dataKey?: string;
}> = ({ options, onSelect, optionKeys, loading = false, dataKey }) => {
  const getChildren = (children: ReactNode, count: number = 1) => (
    <Wrapper optionsCount={count}>{children}</Wrapper>
  );

  if (loading) {
    return getChildren(
      <Option disabled justifyContent="center" type="button">
        <Text color="gray.400">Loading...</Text>
      </Option>
    );
  }

  if (options.length > 0) {
    return getChildren(
      options.map((item: any) => (
        <Option
          key={item[dataKey || optionKeys.value]}
          onClick={() => onSelect(item[optionKeys.value])}
          type="button"
        >
          {item[optionKeys.label]}
        </Option>
      )),
      options.length
    );
  }

  return getChildren(
    <Option disabled justifyContent="center" type="button">
      No Options
    </Option>
  );
};

export default Options;
