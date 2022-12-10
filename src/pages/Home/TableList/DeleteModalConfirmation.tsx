import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { Modal } from '../../../components/Modal';
import { Button } from '../../../components/Button';

interface ModalProps {
  openModal: boolean;
  onClose: () => void;
  onHandleRemove: (id:string)=> void;
  userName: string;
  id: string | Number
}

const DeleteModalConfirmation: React.FC<ModalProps> = ({
  openModal,
  onClose,
  onHandleRemove,
  userName,
  id
}) => {
  return (
    <Modal showModal={openModal} onClose={onClose}>
      <Flex align='center' justify='center' flexDir='column' py='36px' w='100%'>
        <Box marginBottom='36px'>
          <Text>Are you sure you want to remove {userName}?</Text>
        </Box>
        <Flex align='center' justify='center'>
          <Button onClick={onClose} variant='ghost' colorScheme='blue'>
            Cancel
          </Button>
          <Text color={'gray.300'}>|</Text>
          <Button onClick={()=> onHandleRemove(`${id}`)} variant='ghost' colorScheme='blue'>
            Remove
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default DeleteModalConfirmation;
