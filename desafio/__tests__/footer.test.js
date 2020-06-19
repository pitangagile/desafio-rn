import React from 'react';
import Footer from '../src/components/footer';

import renderer from 'react-test-renderer';

describe('<Footer />', () => {
  it('Footer show loader and hide end message', () => {
    const fragment = renderer
      .create(<Footer loading end={false} endText="Texto aleatório" />)
      .toJSON();
    expect(fragment).toMatchSnapshot();
  });

  it('Footer hide loader and show end message', () => {
    const fragment = renderer
      .create(<Footer loading={false} end endText="Texto aleatório" />)
      .toJSON();
    expect(fragment).toMatchSnapshot();
  });
});
