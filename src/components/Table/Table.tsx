import { Table, Box, Flex, useTheme } from '@chakra-ui/react';
import Pagination from './TablePagination';
import TableBody from './TableBody';
import TableHead from './TableHead';
import type { TableProps } from './type';

const TableWrapper = ({
  pagination = false,
  defaultCurrentPage = 1,
  currentPage = 1,
  totalItems = 0,
  defaultPageSize = 10,
  pageSize = 10,
  onChangePage = () => {},
  onChangePageOffset = () => {},
  columns,
  data,
  commonBodyStyles = { padding: '10px 24px' },
  commonHeaderStyles = { padding: '10px 24px' },
  forDeletionCount = 0,
  dataKey = 'id',
  onDelete = () => {},
  wrapperProps = {},
  tableWrapperProps = {},
  useIndexAsKey = false,
  checkOnchange,
  tableBodyProps = {},
  emptyFooter,
}: TableProps) => {
  const { colors, background } = useTheme();

  return (
    <Box overflowY='auto' overflowX='hidden' h='inherit' w='100%' {...wrapperProps}>
      <Box
        border='1px solid'
        borderColor={colors.gray[200]}
        borderRadius='26px'
        {...{
          ...tableWrapperProps,
        }}>
        <Table variant='simple'>
          <TableHead columns={columns} commonHeaderStyles={commonHeaderStyles} />
          <TableBody
            {...tableBodyProps}
            useIndexAsKey={useIndexAsKey}
            dataKey={dataKey}
            data={data}
            commonBodyStyles={commonBodyStyles}
            columns={columns}
          />
        </Table>
        {pagination && (
          <Flex
            alignItems='center'
            justifyContent='end'
            bg={background.whiteBg}
            p='16px 36px 15px'>
            <Pagination
              total={totalItems} // total item count of result
              onChange={onChangePage}
              onChangeOffset={onChangePageOffset}
              current={currentPage}
              pageSize={pageSize}
              defaultPageSize={defaultPageSize}
              defaultCurrent={defaultCurrentPage}
            />
          </Flex>
        )}
        {emptyFooter && <Flex m='24px 0px' />}
      </Box>
    </Box>
  );
};

export default TableWrapper;
