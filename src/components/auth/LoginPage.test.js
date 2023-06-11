import { render } from '@testing-library/react';
import LoginPage from './LoginPage';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {defaultState, userInterface} from '../../reactRedux/reducer';
import { getUserInterface } from '../../reactRedux/selectors';

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
});