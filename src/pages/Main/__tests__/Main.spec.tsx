import { render } from '@testing-library/react';

import Main from '../index';

describe('<Main />', () => {
  it('should match snapshots', () => {
    const wrapper = render(<Main />);

    expect(wrapper).toMatchSnapshot();
  });
});
