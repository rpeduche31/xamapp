import { describe, expect, test } from '@jest/globals';
import { render, screen } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom'
import Login from './pages/Login'
import * as router from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';

const navigate = jest.fn()

describe('Render Login Page', () => {
  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
  })
  
  it('renders correctly', () => {
    render(<Router><Login /></Router>);
    expect(screen).toMatchSnapshot();
  });

  it('Inputs with correct Branch ID Label', async () => {
    render(<Router><Login /></Router>);
    const labelNode =  screen.getAllByLabelText('Branch ID')
    expect(labelNode)?.toHaveLength(1);
  });

  it('Inputs with correct Username Label', async () => {
    render(<Router><Login /></Router>);
    const labelNode =  screen.getAllByLabelText('Username')
    expect(labelNode)?.toHaveLength(1);
  });

  it('Inputs with correct Password Label', async () => {
    render(<Router><Login /></Router>);
    const labelNode =  screen.getAllByLabelText('Password')
    expect(labelNode)?.toHaveLength(1);
  });
  
});
