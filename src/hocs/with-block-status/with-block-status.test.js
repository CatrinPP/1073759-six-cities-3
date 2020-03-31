import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withBlockStatus from './with-block-status.js';

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

const MockComponentWrapped = withBlockStatus(MockComponent);

it(`withBlockStatus is rendered correctly`, () => {
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
