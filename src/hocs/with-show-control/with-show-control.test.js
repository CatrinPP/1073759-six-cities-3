import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withShowControl from './with-show-control.js';
import {SortingType} from '../../const.js';

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

const MockComponentWrapped = withShowControl(MockComponent);

it(`withShowControl is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      sortType={SortingType.DEFAULT}
      handleSortTypeClick={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
