import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import SignIn from './sign-in';
import NameSpace from '../../reducer/name-space';
import {AuthorizationStatus} from '../../const';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`Click to submit form calls callbalk`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH
    },
  });

  const handleFormSubmitMock = jest.fn();

  const signInPage = mount(
      <Provider store={store}>
        <SignIn
          handleFormSubmit={handleFormSubmitMock}
        />
      </Provider>
  );
  signInPage.find(`.login__form`).simulate(`submit`);
  expect(handleFormSubmitMock).toHaveBeenCalledTimes(1);
});


