import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

import history from '../../../services/history';
import Profile from '../index';

describe('<Profile />', () => {
  it('should match snapshots', () => {
    const wrapper = render(
      <Router history={history}>
        <Profile />
      </Router>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
