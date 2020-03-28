import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form.jsx';

it(`Should render Reviews form correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm
      checkCommentFilled={() => {}}
      isReviewFormBlocked={false}
      isSubmitButtonBlocked={true}
      onSubmit={() => {}}
      setRating={() => {}}
      uncheckCommentFilled={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
