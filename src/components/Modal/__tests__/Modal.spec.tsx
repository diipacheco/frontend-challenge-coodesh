import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

import history from '../../../services/history';
import { IUser } from '../../../hooks/users';

import Modal from '../index';

describe('<Modal />', () => {
  it('should match snapshots', () => {
    const wrapper = render(
      <Router history={history}>
        <Modal modalIsOpen closeModal={jest.fn()} userInfo={{} as IUser} />
      </Router>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
