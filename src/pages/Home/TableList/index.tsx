import { useState, useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { Table } from '../../../components/Table';
import { users } from '../../../mockData/user_data';
import DeleteModalConfirmation from './DeleteModalConfirmation';
import AddUserModal from './AddUserModal';
import { ModalData } from './AddUserModal';
import { useUserList } from '../../../context/userLists';

const hStyles = {
  padding: '19px 16px 18px',
  fontWeight: 700,
  fontSize: 18,
  lineHeight: 1.28,
  textTransform: 'capitalize',
  color: 'gray.900',
};

const bStyles = {
  padding: '20px 16px 19px',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.5,
  textTransform: 'capitalize',
};

const wStyles = {
  width: '100%',
};

const twStyles = {};

const TableList = ({
  page = 1,
  offset = 10,
  total = 10,
  data,
  onPageChange = () => '',
  onSizeChange = () => '',
  onDelete = () => '',
}: any) => {
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
  const { userList, addUser, removeUser } = useUserList();

  const RenderRemoveModal = ({ userName, id }: any) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleModalStatus = () => {
      setOpenModal(!openModal);
    };

    const handleRemoveUser = (id: string) => {
      removeUser(id);
    };

    return (
      <>
        <Button onClick={handleModalStatus} bg='gray' color='white'>
          REMOVE
        </Button>
        <DeleteModalConfirmation
          userName={userName}
          onClose={handleModalStatus}
          openModal={openModal}
          onHandleRemove={handleRemoveUser}
          id={id}
        />
      </>
    );
  };

  const columns = [
    {
      key: 'num',
      label: '#',
      width: '5%',
    },
    {
      key: 'branchId',
      label: 'Branch ID',
      width: '15%',
    },
    {
      key: 'userName',
      label: 'Username',
      width: '20%',
    },
    {
      key: 'name',
      label: 'Name',
      width: '25%',
      cellRenderer: ({ rowData }: any) => {
        const { firstName, middleName, lastName } = rowData;
        return (
          <>{`${firstName ?? ''} ${middleName ? middleName.slice(0, 1) : ''}. ${
            lastName ?? ''
          } `}</>
        );
      },
    },
    {
      key: 'position',
      label: 'Position',
    },

    {
      key: 'action',
      label: 'Action',
      cellRenderer: ({ rowData }: any) => {
        return (
          <>
            <RenderRemoveModal userName={rowData.userName} id={rowData.branchId} />
          </>
        );
      },
      width: '10%',
    },
  ];

  const handleOpenAddModal = () => {
    setOpenAddModal(!openAddModal);
  };

  const handleAddUser = (data: ModalData) => {
    addUser(data);
    handleOpenAddModal();
  };

  return (
    <>
      <AddUserModal
        onClose={handleOpenAddModal}
        openModal={openAddModal}
        onhandleAdd={handleAddUser}
        userList={userList}
      />
      <Flex m='25px' justify='flex-end' width='100%'>
        <Button bg='#1da1f2' color='white' onClick={handleOpenAddModal}>
          Add New User
        </Button>
      </Flex>
      <Table
        pagination={false}
        useIndexAsKey
        columns={columns}
        data={userList ?? []}
        onChangePage={onPageChange}
        onChangePageOffset={onSizeChange}
        currentPage={page}
        pageSize={offset}
        totalItems={total}
        wrapperProps={wStyles}
        tableWrapperProps={twStyles}
        commonHeaderStyles={hStyles}
        commonBodyStyles={bStyles}
      />
    </>
  );
};

export default TableList;
