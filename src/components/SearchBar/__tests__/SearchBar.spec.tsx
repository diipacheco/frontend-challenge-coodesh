import { render } from '@testing-library/react';

import SearchBar from '../index';

describe('<SearchBar />', () => {
  it('should match snapshots', () => {
    const wrapper = render(<SearchBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
