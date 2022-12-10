import Pagination from 'rc-pagination';
import { Select, Flex } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { pageSizeOptions } from '../../constants/pageSizeOptions';
import { PaginationContainer, IconContainer } from './Table.styled';
import type { paginationProps } from './type';

const PaginationComponent = ({
  defaultCurrent = 1,
  current,
  total,
  defaultPageSize = 10,
  pageSize = 10,
  onChange,
  onChangeOffset,
}: paginationProps) => (
  <Flex>
    <Select
      value={pageSize}
      onChange={(e) => onChangeOffset(parseInt(e.target.value))}
      w='79px'
      m='0 15px'
    >
      {pageSizeOptions.map((pageSizeOpt) => (
        <option key={`dropdown-${pageSizeOpt}`} value={pageSizeOpt}>
          {pageSizeOpt}
        </option>
      ))}
    </Select>
    <PaginationContainer>
      <Pagination
        defaultCurrent={defaultCurrent}
        current={current + 1}
        total={total}
        defaultPageSize={defaultPageSize}
        pageSize={pageSize}
        onChange={(value: any) => {
          onChange(value - 1);
        }}
        showPrevNextJumpers
        prevIcon={() => (
          <IconContainer hide={current === 1}>
            <ArrowLeftIcon />
          </IconContainer>
        )}
        nextIcon={() => (
          <IconContainer hide={current === Math.ceil(total / pageSize)}>
            <ArrowRightIcon />
          </IconContainer>
        )}
        jumpNextIcon={() => <div>...</div>}
        jumpPrevIcon={() => <div>...</div>}
      />
    </PaginationContainer>
  </Flex>
);

export default PaginationComponent;
