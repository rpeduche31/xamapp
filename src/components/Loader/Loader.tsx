import ReactDOM from 'react-dom/client';
import { Flex, CircularProgress, Image } from '@chakra-ui/react';

import { Wrapper } from './Loader.styled';
import {Spinner} from '../icons'

// This Loader component covers the whole page when an API is called
export const Loader = () => {
  return (
      <Wrapper>
        <Flex align="center" justifyContent='center'>
            <CircularProgress />
        </Flex> 
      </Wrapper>
  );
};

const addElement = () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'loader');
  document.body.appendChild(div);
};

export const openLoader = () => {
  addElement();
  const root = ReactDOM.createRoot(
    document.getElementById('loader') as HTMLElement
  );
  root.render(
    <Loader />
  );
};

export const closeLoader = () => {
  const element = document.getElementById('loader');
  element?.parentNode?.removeChild(element);
};
