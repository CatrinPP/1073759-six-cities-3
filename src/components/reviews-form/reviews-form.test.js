import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsForm from './reviews-form.jsx';

it(`Should render Reviews form correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm
      blockForm={() => {}}
      checkCommentFilled={() => {}}
      isError={false}
      isReviewFormBlocked={false}
      isSubmitButtonBlocked={true}
      onSubmit={() => {}}
      setRating={() => {}}
      showError={() => {}}
      uncheckCommentFilled={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Reviews form with an error correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm
      blockForm={() => {}}
      checkCommentFilled={() => {}}
      isError={true}
      isReviewFormBlocked={false}
      isSubmitButtonBlocked={false}
      onSubmit={() => {}}
      setRating={() => {}}
      showError={() => {}}
      uncheckCommentFilled={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render Reviews form with enabled submit button correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm
      blockForm={() => {}}
      checkCommentFilled={() => {}}
      isError={false}
      isReviewFormBlocked={false}
      isSubmitButtonBlocked={false}
      onSubmit={() => {}}
      setRating={() => {}}
      showError={() => {}}
      uncheckCommentFilled={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should render blocked Reviews form correctly`, () => {
  const tree = renderer
    .create(<ReviewsForm
      blockForm={() => {}}
      checkCommentFilled={() => {}}
      isError={false}
      isReviewFormBlocked={true}
      isSubmitButtonBlocked={true}
      onSubmit={() => {}}
      setRating={() => {}}
      showError={() => {}}
      uncheckCommentFilled={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
