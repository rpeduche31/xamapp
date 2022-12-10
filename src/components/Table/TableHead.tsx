import { FC } from 'react';
import { Thead, Tr, Th } from '@chakra-ui/react';
import type { ColumnsProps } from './type';

const TableHead: FC<{
  columns: Array<ColumnsProps>;
  commonHeaderStyles: object;
}> = ({ columns, commonHeaderStyles }) => (
  <Thead>
    <Tr>
      {columns.map((column: any, columnIndex: number) => (
        <Th
          key={column.key}
          width={column.width}
          {...{
            ...commonHeaderStyles,
            ...(column.headerStyles || {}),
          }}>
          {column.headerRenderer
            ? column.headerRenderer({
                headerData: column,
                columnIndex,
                cellData: column[column.key] || '',
              })
            : column.label || ''}
        </Th>
      ))}
    </Tr>
  </Thead>
);

export default TableHead;
