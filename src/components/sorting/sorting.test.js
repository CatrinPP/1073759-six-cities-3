import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting.jsx';
import {SortingType} from '../../const.js';


it(`Should render Sorting component correctly`, () => {
  const tree = renderer
    .create(<Sorting
      handleShowUpClick={() => {}}
      handleSortTypeClick={() => {}}
      isCollapsed={true}
      sortType={SortingType.DEFAULT}
    />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
