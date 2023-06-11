import { fireEvent, render , screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {defaultState } from '../../reactRedux/reducer';
import { getUserInterface } from '../../reactRedux/selectors';
import { authLogin } from '../../reactRedux/actions';

describe('LoginPage component test', () => {
  
  const store = {
    getState: (error = null) => {
      const state = defaultState;
      state.userInterface = getUserInterface(state);
      state.userInterface.error = error;
      return state;
    },
    subscribe: jest.fn(),
    dispatch: jest.fn()
  }

  const renderComponent = () => render( 
  <Provider store={store}>
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  </Provider>
  );

  test('LoginPage snapshot', () => {
    const {container} = renderComponent();
    expect(container).toMatchSnapshot();
  });
  
  test('should dispatch authLogin action', () => {
    const username = "Cristian";
    const password = "1234";

    renderComponent();
    
    const usernameInput = screen.getByPlaceholderText("username");
    const passwordInput = screen.getByPlaceholderText("password");
    const submitButton = screen.getByRole('button');
    
    fireEvent.change(usernameInput, {event: {target : { username : {value: username}}}});
    fireEvent.change(passwordInput, {event: {target : {password: {value: password}}}});

    fireEvent.click(submitButton);

    expect(authLogin).toHaveBeenNthCalledWith(1, {username, password} )
  })
});