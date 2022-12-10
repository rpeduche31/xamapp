import React, { useEffect, useState } from 'react';
import { Text, Flex, FormControl } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card/Card.styled';
import { Wrapper } from './Login.styled';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import has from '../../utils/hasOwnProperty';
import { openLoader, closeLoader } from '../../components/Loader';
import { useAuth } from '../../context/auth';
import { useUserList } from '../../context/userLists';
import { users } from '../../mockData/user_data';

import { useCheckAuthentication } from '../../hooks/useCheckAuthentication';

const Login: React.FC<{}> = () => {
  const { user, login } = useAuth();
  const { getDefaultUserList, userList } = useUserList();

  const navigate = useNavigate();
  const { withError, getInputtedCredentials, loading } = useCheckAuthentication();
  const [renderPage, setRenderPage] = useState(false);
  const [loginButtonPressed, setLoginButtonPressed] = useState(false);

  const [authError, setAuthError] = useState('');

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(()=>{
    users && (userList?.length < 1 || userList === undefined) && getDefaultUserList && getDefaultUserList(users)
  },[users, userList])

  const onLoginSubmit = (data: any) => {
    openLoader();
    const { branchId, username, password } = data;
    if (branchId && username && password) {
      setLoginButtonPressed(true);
      getInputtedCredentials(branchId, username, password);
    }
  };

  useEffect(() => {
    const { branchId, username, password } = getValues();
    if (!loading && loginButtonPressed) {
      closeLoader();
      if (withError.length > 0) {
        if (withError === 'missing') {
          setAuthError('No account found, please try again.');
        } else if (withError === 'mismatched') {
          setAuthError('Credentials do not match, please try again.');
        }
        setLoginButtonPressed(false);
      } else {
        setLoginButtonPressed(false);
        login(branchId, username, password);
      }
    }
  }, [loginButtonPressed, withError, loading]);

  useEffect(() => {
    setRenderPage(false);
    if (user) {
      openLoader();
      navigate('/');
      setRenderPage(false);
      closeLoader();
    }
    closeLoader();
    setRenderPage(true);
  }, [user]);

  return renderPage ? (
    <Wrapper>
      <Flex w={500} flex={1} direction='column' align='center' justify='center'>
        <Card
          display='flex'
          justifyContent='center'
          flexDirection='column'
          h='500px'
          w={'100%'}
          p='0'>
          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            onChange={() => authError.length > 0 && setAuthError('')}>
            <Flex justify='center' mb='10px' alignItems={'center'} flexDir='column'>
              {authError.length > 0 ? (
                <Text color='red'>{authError}</Text>
              ) : (
                <Text color='white'>''</Text>
              )}
              <Flex w='85%' m='10px'>
                <FormControl>
                  <Input
                    isError={has.call(errors, 'branchId')}
                    errorMessage={(errors?.branchId?.message as string) || ''}
                    label='Branch ID'
                    {...register('branchId', { required: 'This is required' })}
                  />
                </FormControl>
              </Flex>
              <Flex w='85%' m='10px'>
                <FormControl>
                  <Input
                    isError={has.call(errors, 'username')}
                    errorMessage={(errors?.username?.message as string) || ''}
                    label='Username'
                    {...register('username', { required: 'This is required' })}
                  />
                </FormControl>
              </Flex>
              <Flex w='85%' m='10px'>
                <FormControl marginBottom='30px'>
                  <Input
                    type='password'
                    isError={has.call(errors, 'password')}
                    errorMessage={(errors?.password?.message as string) || ''}
                    label='Password'
                    {...register('password', { required: 'This is required' })}
                  />
                </FormControl>
              </Flex>
              <Flex mt='25px'>
                <Button width='213px' height='41px' type='submit'>
                  Log in
                </Button>
              </Flex>
            </Flex>
          </form>
        </Card>
      </Flex>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Login;
