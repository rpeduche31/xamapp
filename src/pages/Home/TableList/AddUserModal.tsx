import React, { useState, useMemo } from 'react';
import { Text, Flex, FormControl, Icon, Box } from '@chakra-ui/react';
import { Modal } from '../../../components/Modal';
import { Button } from '../../../components/Button';
import { Select } from '../../../components/Select';
import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input';
import has from '../../../utils/hasOwnProperty';

export type ModalData = {
  branchId: string;
  username: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  position: string;
  password: string;
  FieldValues: any;
};

interface ModalProps {
  openModal: boolean;
  onClose: () => void;
  onhandleAdd: (data: ModalData) => void;
  userList: [];
}

const AddUserModal: React.FC<ModalProps> = ({
  openModal,
  onClose,
  onhandleAdd,
  userList,
}) => {
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const [positionValue, setPositionValue] = useState<string>('');

  const fieldTypes =  [
      {
        label: 'Branch ID',
        key: 'branchId',
        validation: { required: true, minLength: 3, maxLength: 5 },
        inputType: 'number',
      },
      {
        label: 'Username',
        key: 'userName',
        validation: { required: true, minLength: 2 },
      },
      {
        label: 'First Name',
        key: 'firstName',
        validation: { required: true, minLength: 2 },
      },
      {
        label: 'Middle Name',
        key: 'middleName',
      },
      {
        label: 'Last Name',
        key: 'lastName',
        validation: { required: true, minLength: 2 },
      },
      {
        label: 'Position',
        key: 'position',
        validation: { required: true },
        type: 'select',
      },
      {
        label: 'Password',
        key: 'password',
        validation: {
          required: true,
          pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i,
          minLength: 8,
          maxLength: 32,
        },
      },
    ];

  const positionOptions = [
    {
      label: 'Developer',
      value: 'developer',
    },
    {
      label: 'Lead Engineer',
      value: 'leadEngineer',
    },
    {
      label: 'Project Manager',
      value: 'projectManager',
    },
  ];

  const checkBrancIDAvailability = (id: string) => {
    const checkBranchId = userList.filter(
      (item: { branchId: string }) => `${item.branchId}` === id,
    );
    return checkBranchId.length > 0;
  };

  const handleSubmitAdd = (data: any) => {
    if (checkBrancIDAvailability(data?.branchId)) {
      setError('branchId', {
        type: 'pattern',
        message: 'Branch ID is already in the database',
      });
    } else {
      onhandleAdd(data);
      reset();
      setPositionValue('');
    }
  };

  const handleReset = (type: string | '') => {
    reset();
    type === 'close' && onClose();
  };

  const handleError = (errors: any, e: any) => {
    const constructMessage = (label: string, keyValue: string, type: string) => {
      if (type === 'required') {
        return 'This is required.';
      } else if (type === 'minLength') {
        if (keyValue === 'branchId') {
          return `${label} is too short, minimum length is 3.`;
        }
        if (keyValue === 'password') {
          return `${label} is too short, minimum length is 8.`;
        }
        return `${label} is too short, length must be greater than 2.`;
      } else if (type === 'maxLength') {
        if (keyValue === 'branchId') {
          return `${label} is too long, max length is 5.`;
        }
        if (keyValue === 'password') {
          return `${label} is too long, max length is 20.`;
        }
        return `${label} is too short, length must be greater than 2.`;
      } else if (type === 'pattern') {
        return `${label} must consists of letters and numbers only.`;
      }
    };

    fieldTypes.map((item: { key: string; label: string }) => {
      if (errors[item.key]) {
        setError(item.key, {
          type: errors[item.key]?.type,
          message: constructMessage(item.label, item.key, errors[item.key]?.type),
        });
      }
    });
  };

  

  return (
    <Modal size={'3xl'} showModal={openModal} onClose={() => handleReset('close')}>
      <Flex
        w={'100%'}
        flex={1}
        direction='column'
        align='flex-start'
        p='20px'
        justify='center'>
        <Text fontSize={18} fontWeight='bold' mb='10px'>
          Add New User
        </Text>
        <Flex justify='center' w='100%' mb='10px' alignItems={'center'} flexDir='column'>
          <form
            onChange={() => clearErrors()}
            style={{ width: '100%' }}
            onSubmit={handleSubmit(handleSubmitAdd, handleError)}>
            {fieldTypes.map(({ label, key, validation, type, inputType }) => {
              return (
                <Flex w='100%' m='8px' key={key}>
                  <FormControl>
                    {type === 'select' ? (
                      <Select
                        {...register(key, { ...validation })}
                        isLoading={false}
                        options={positionOptions}
                        value={positionValue}
                        isError={has.call(errors, key)}
                        label='Position'
                        onChange={(value: any) => {
                          clearErrors();
                          setPositionValue(value as string);
                          setValue('position', value);
                        }}
                        errorMessage={(errors?.[key]?.message as string) || ''}
                        optionKeys={{
                          label: 'label',
                          value: 'value',
                        }}
                        onClear={() => setPositionValue('')}
                      />
                    ) : (
                        <Input
                          maxLength={60}
                          type={inputType && inputType}
                          isError={has.call(errors, key)}
                          errorMessage={(errors?.[key]?.message as string) || ''}
                          label={label}
                          {...register(key, { ...validation })}
                        />
                    )}
                  </FormControl>
                </Flex>
              );
            })}

            <Flex mt='25px' w='100%' align='center' justify='space-around'>
              <Button width='180px' height='41px' onClick={() => handleReset('')}>
                Reset
              </Button>
              <Button width='180px' height='41px' type='submit'>
                Add
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default AddUserModal;
