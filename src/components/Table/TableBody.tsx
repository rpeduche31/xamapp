import React from 'react';
import { Tr, Tbody, Td, Text, Icon } from '@chakra-ui/react';
import type { ColumnsProps } from './type';

const TableBody: React.FC<{
  dataKey: string;
  data: Array<any>;
  commonBodyStyles: object;
  columns: Array<ColumnsProps>;
  useIndexAsKey: boolean;
}> = ({
  dataKey,
  data,
  commonBodyStyles,
  columns,
  useIndexAsKey,
  ...props
}) => {
  const { onRowClick, customEmptyComponent }: any = props;

  const handleRowClick = (row: object, column: object) => {
    onRowClick && onRowClick(row, column);
  };

  return (
    <Tbody
      backgroundColor="white"
      color="text.headerNameColor"
      maxHeight="300px"
      overflow="auto"
    >
      {data?.length ? (
        data.map((row: any, rowIndex: number) => {
          const rowKey = `row-${useIndexAsKey ? rowIndex : row[dataKey]}`;
          return (
            <Tr key={rowKey}>
              {columns.map((column) => (
                <Td
                  onClick={() => handleRowClick(row, column)}
                  key={`${rowKey}-column-${column.key}`}
                  width={column.width}
                  {...{
                    ...commonBodyStyles,
                    ...(column.bodyStyles || {}),
                    ...(data.length - 1 === rowIndex
                      ? { borderBottom: 0 }
                      : {}),
                  }}
                >
                  {column.cellRenderer
                    ? column.cellRenderer({
                        rowData: row,
                        rowIndex,
                        cellData: row[column.key] || '',
                      })
                    : row[column.key] || ''}
                </Td>
              ))}
            </Tr>
          );
        })
      ) : (
        <Tr>
          <Td
            verticalAlign="middle"
            textAlign="center"
            colSpan={columns.length}
            height="300px"
          >
            {customEmptyComponent?.image ?? (
              <Icon
                width="101.8px"
                height="65.051px"
                as={customEmptyComponent?.icon}
              />
            )}
            <Text mt="5px">{customEmptyComponent?.label ?? 'No data'}</Text>
          </Td>
        </Tr>
      )}
    </Tbody>
  );
};

export default TableBody;
