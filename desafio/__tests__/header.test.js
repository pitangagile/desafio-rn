import React from 'react';
import HeaderApp from '../src/components/header';

import renderer from 'react-test-renderer';

test('Header Snapshot', () => {
  const tree = renderer
    .create(<HeaderApp title="Aqui vai um titulo" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
