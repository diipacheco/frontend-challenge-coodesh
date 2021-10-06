import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { act } from 'react-dom/test-utils';
import { useUsers, UsersContextProvider } from '../users';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('UsersHook', () => {
  it('should be able to fetch users', async () => {
    const apiResponse = {
      results: [
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
    };

    apiMock
      .onGet(
        '?inc=id,picture,name,email,gender,dob,cell,nat,location&results=50&page=1',
      )
      .reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useUsers(), {
      wrapper: UsersContextProvider,
    });

    act(() => {
      result.current.fetchUsers(1);
    });

    await waitForNextUpdate();

    expect(result.current.users).toEqual(apiResponse.results);
  });
  it('should be able to filter a specific user', async () => {
    const apiResponse = {
      results: [
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
    };

    const user = {
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
    };

    apiMock
      .onGet(
        '?inc=id,picture,name,email,gender,dob,cell,nat,location&results=50&page=1',
      )
      .reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useUsers(), {
      wrapper: UsersContextProvider,
    });

    act(() => {
      result.current.fetchUsers(1);
    });

    await waitForNextUpdate();

    act(() => {
      result.current.filterUserInfo('756.3619.2825.80');
    });

    expect(result.current.user).toEqual(user);
  });
});
