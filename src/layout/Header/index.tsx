import { Flex, Box } from '@chakra-ui/react';
import { Wrapper } from './header.styled';
import { Button } from '../../components/Button';

type HeaderProps = {
  logoutUser: Function;
  username: string;
};

const Header = ({ logoutUser, username }: HeaderProps) => {
  const handleSignOut = () => {
    logoutUser && logoutUser();
  };

  return (
    <Wrapper>
      <Flex justify='center'>{username ?? ''}</Flex>

      <Flex justify='center' py='10px'>
        <Button w='150px' onClick={handleSignOut}>
          Sign Out
        </Button>
      </Flex>
    </Wrapper>
  );
};

export default Header;
