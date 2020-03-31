import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import ReviewsForm from './reviews-form';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Events`, () => {
  it(`Click to input fields calls callbalks`, () => {
    const store = mockStore();

    const setRatingMock = jest.fn();

    const reviewForm = mount(
        <Provider store={store}>
          <ReviewsForm
            blockForm={() => {}}
            setRating={setRatingMock}
            checkCommentFilled={() => {}}
            isReviewFormBlocked={false}
            isSubmitButtonBlocked={false}
            onSubmit={() => {}}
            uncheckCommentFilled={() => {}}
          />
        </Provider>
    );
    reviewForm.find(`.form__rating-input`).forEach((el) => el.simulate(`click`));
    expect(setRatingMock).toHaveBeenCalledTimes(5);

  });

  it(`Textarea fill calls callbalk`, () => {
    const store = mockStore({
    });

    const handleTextareaChangeMock = jest.fn();

    const comment = {
      target: {
        value: `SomeCommentWithMoreThan50symbolsSomeCommentWithMoreThan50symbols`
      }
    };

    const reviewForm = mount(
        <Provider store={store}>
          <ReviewsForm
            blockForm={() => {}}
            setRating={() => {}}
            checkCommentFilled={handleTextareaChangeMock}
            isReviewFormBlocked={false}
            isSubmitButtonBlocked={false}
            onSubmit={() => {}}
            uncheckCommentFilled={handleTextareaChangeMock}
          />
        </Provider>
    );

    reviewForm.find(`.reviews__textarea`).simulate(`change`, comment);
    expect(handleTextareaChangeMock).toHaveBeenCalledTimes(1);
  });

  it(`Submit form returns callbalk`, () => {
    const store = mockStore({
    });

    const handleSubmitForm = jest.fn();

    const reviewForm = mount(
        <Provider store={store}>
          <ReviewsForm
            blockForm={() => {}}
            setRating={() => {}}
            checkCommentFilled={() => {}}
            isReviewFormBlocked={false}
            isSubmitButtonBlocked={false}
            onSubmit={handleSubmitForm}
            uncheckCommentFilled={() => {}}
          />
        </Provider>
    );

    reviewForm.find(`.reviews__form`).simulate(`submit`);
    expect(handleSubmitForm).toHaveBeenCalledTimes(1);
  });
});
