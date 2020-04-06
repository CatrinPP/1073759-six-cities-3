import React from 'react';
import {Router} from "react-router-dom";
import history from "../../history.js";
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
      <Router history={history}>
        <Provider store={store}>
          <SignIn
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            onSubmit={handleFormSubmitMock}
          />
        </Provider>
      </Router>
  );
  signInPage.find(`.login__form`).simulate(`submit`);
  expect(handleFormSubmitMock).toHaveBeenCalledTimes(1);
});


