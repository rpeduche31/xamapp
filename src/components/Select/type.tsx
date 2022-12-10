import { ReactNode } from 'react';

export type OptionKeyProps = {
  label: string;
  value: string;
};

export interface Props {
  disabled?: boolean;
  errorMessage: string;
  isError: boolean;
  label: string;
  options: Array<any>;
  onChange: (value: string | number) => void;
  value: string | number;
  optionKeys?: OptionKeyProps;
  isLoading?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  onClear?: (value: '') => void;
  iconClear?: ReactNode;
  readOnly?: boolean;
  disableDropDown?: boolean;
  handleCustomFunction?: () => void;
}
