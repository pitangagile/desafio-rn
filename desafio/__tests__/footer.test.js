import React from 'react';
import Footer from '../src/components/footer';

import renderer from 'react-test-renderer';

test('Footer Snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
