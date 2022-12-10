import {ReactNode} from 'react';

export type paginationProps = {
  defaultCurrent?: number;
  current: number;
  total: number;
  defaultPageSize?: number;
  pageSize: number;
  onChange: (currPage: number) => void;
  onChangeOffset: (currOffset: number) => void;
};

export type pageDropdownProps = {
  isOpen: boolean;
  value: number;
  options: number[];
  onClick: () => void;
  onClickOption: (option: number) => void;
};

export type TablePaginationProps =
  | {
      pagination?: false;
      defaultCurrentPage?: number;
      currentPage?: number;
      totalItems?: number;
      defaultPageSize?: number;
      pageSize?: number;
      onChangePage?: (currentPage: number) => void;
      onChangePageOffset?: (currentPageOffset: number) => void;
    }
  | {
      pagination: boolean;
      defaultCurrentPage?: number;
      currentPage: number;
      totalItems: number;
      defaultPageSize?: number;
      pageSize: number;
      onChangePage: (currentPage: number) => void;
      onChangePageOffset: (currentPageOffset: number) => void;
    };

export type ColumnsProps = {
  key: string;
  label?: ReactNode;
  headerStyles?: object;
  cellRenderer?: (cellRendererData: {rowIndex: number; rowData: any; cellData: any}) => ReactNode;
  bodyStyles?: object;
  width?: string;
};

export type Table = {
  dataKey?: string;
  columns: Array<ColumnsProps>;
  data: Array<any>;
  commonHeaderStyles?: object;
  commonBodyStyles?: object;
  wrapperProps?: object;
  tableWrapperProps?: object;
  useIndexAsKey?: boolean;
  tableBodyProps?: object;
  emptyFooter?: boolean;
};

export type SearchProps = {
  onSearch?: (params: object) => void;
  forDeletionCount?: number;
  onDelete?: () => void;
  checkOnchange?: any;
};

export type NavProps = {
  label: string | ReactNode;
  key: string;
  path: string;
  checkIsActive: (key: string) => boolean;
};

export type TableNavProps =
  | {
      hasNavs: true;
      navSide?: ReactNode;
      navs: NavProps[];
    }
  | {
      hasNavs?: false;
      navSide?: ReactNode;
      navs?: NavProps[];
    };

export type TableProps = TablePaginationProps & Table & TableNavProps & SearchProps;
