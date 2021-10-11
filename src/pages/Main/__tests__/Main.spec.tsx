import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

import Main from '../index';
import history from '../../../services/history';

jest.mock('../../../hooks/users', () => ({
  useUsers: () => ({
    users: [
      {
        gender: 'male',
        name: {
          title: 'Monsieur',
          first: 'Sébastien',
          last: 'Leroy',
        },
        location: {
          street: {
            number: 779,
            name: "Place des 44 Enfants D'Izieu",
          },
          city: 'Reichenbach im Kandertal',
          state: 'Uri',
          country: 'Switzerland',
          postcode: 2331,
          coordinates: {
            latitude: '-53.7073',
            longitude: '-49.9865',
          },
          timezone: {
            offset: '+1:00',
            description: 'Brussels, Copenhagen, Madrid, Paris',
          },
        },
        email: 'sebastien.leroy@example.com',
        dob: {
          date: '1973-11-03T12:52:19.961Z',
          age: 48,
        },
        cell: '079 499 83 26',
        id: {
          name: 'AVS',
          value: '756.3619.2825.80',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/91.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/91.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg',
        },
        nat: 'CH',
      },
    ],
    user: {
      gender: 'male',
      name: {
        title: 'Monsieur',
        first: 'Sébastien',
        last: 'Leroy',
      },
      location: {
        street: {
          number: 779,
          name: "Place des 44 Enfants D'Izieu",
        },
        city: 'Reichenbach im Kandertal',
        state: 'Uri',
        country: 'Switzerland',
        postcode: 2331,
        coordinates: {
          latitude: '-53.7073',
          longitude: '-49.9865',
        },
        timezone: {
          offset: '+1:00',
          description: 'Brussels, Copenhagen, Madrid, Paris',
        },
      },
      email: 'sebastien.leroy@example.com',
      dob: {
        date: '1973-11-03T12:52:19.961Z',
        age: 48,
      },
      cell: '079 499 83 26',
      id: {
        name: 'AVS',
        value: '756.3619.2825.80',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/91.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/91.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg',
      },
      nat: 'CH',
    },
    filterUserInfo: jest.fn(),
    fetchUsers: jest.fn(),
  }),
}));

describe('<Main />', () => {
  it('should match snapshots', () => {
    const wrapper = render(
      <Router history={history}>
        <Main />
      </Router>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
