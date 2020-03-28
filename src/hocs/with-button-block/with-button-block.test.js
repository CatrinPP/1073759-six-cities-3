import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withButtonBlock from './with-button-block.js';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

const MockComponentWrapped = withButtonBlock(MockComponent);

it(`withButtonBlock is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      setRating={() => {}}
      checkCommentFilled={() => {}}
      uncheckCommentFilled={() => {}}
      isSubmitButtonBlocked={false}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
