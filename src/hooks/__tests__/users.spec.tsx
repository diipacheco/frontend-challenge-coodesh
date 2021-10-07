import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { act } from 'react-dom/test-utils';
import { useUsers, UsersContextProvider } from '../users';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

jest.mock('uuid', () => ({
  v4: () => 'testID',
}));

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
      result.current.fetchUsers();
    });

    await waitForNextUpdate();

    const objectStateExpected = [
      {
        cell: '079 499 83 26',
        dob: { age: 48, date: '1973-11-03T12:52:19.961Z' },
        email: 'sebastien.leroy@example.com',
        gender: 'male',
        id: { name: 'AVS', value: '756.3619.2825.80' },
        location: {
          city: 'Reichenbach im Kandertal',
          coordinates: { latitude: '-53.7073', longitude: '-49.9865' },
          country: 'Switzerland',
          postcode: 2331,
          state: 'Uri',
          street: { name: "Place des 44 Enfants D'Izieu", number: 779 },
          timezone: {
            description: 'Brussels, Copenhagen, Madrid, Paris',
            offset: '+1:00',
          },
        },
        name: { first: 'Sébastien', last: 'Leroy', title: 'Monsieur' },
        nat: 'CH',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/91.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/91.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg',
        },
        userId: 'testID',
      },
    ];

    expect(result.current.users).toEqual(objectStateExpected);
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
      userId: 'testID',
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
      result.current.fetchUsers();
    });

    await waitForNextUpdate();

    act(() => {
      result.current.filterUserInfo('testID');
    });

    expect(result.current.user).toEqual(user);
  });

  it('should be able to paginate the user list', async () => {
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
      result.current.fetchUsers();
    });

    await waitForNextUpdate();

    apiMock
      .onGet(
        '?inc=id,picture,name,email,gender,dob,cell,nat,location&results=50&page=2',
      )
      .reply(200, apiResponse);

    act(() => {
      result.current.handleNextPage();
    });

    await waitForNextUpdate();

    const objectStateExpected = [
      {
        cell: '079 499 83 26',
        dob: { age: 48, date: '1973-11-03T12:52:19.961Z' },
        email: 'sebastien.leroy@example.com',
        gender: 'male',
        id: { name: 'AVS', value: '756.3619.2825.80' },
        location: {
          city: 'Reichenbach im Kandertal',
          coordinates: { latitude: '-53.7073', longitude: '-49.9865' },
          country: 'Switzerland',
          postcode: 2331,
          state: 'Uri',
          street: { name: "Place des 44 Enfants D'Izieu", number: 779 },
          timezone: {
            description: 'Brussels, Copenhagen, Madrid, Paris',
            offset: '+1:00',
          },
        },
        name: { first: 'Sébastien', last: 'Leroy', title: 'Monsieur' },
        nat: 'CH',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/91.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/91.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/91.jpg',
        },
        userId: 'testID',
      },
    ];

    expect(result.current.users).toEqual([
      ...objectStateExpected,
      ...objectStateExpected,
    ]);
  });

  it('should be able to search user by first name', async () => {
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
        {
          gender: 'male',
          name: {
            title: 'Monsieur',
            first: 'Arnaldo',
            last: 'Souza',
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
      result.current.fetchUsers();
    });

    await waitForNextUpdate();

    act(() => {
      result.current.searchUsers('Arnaldo');
    });

    const searchedUser = [
      {
        gender: 'male',
        name: {
          title: 'Monsieur',
          first: 'Arnaldo',
          last: 'Souza',
        },
        location: {
          street: {
            number: 779,
            name: "Place des 44 Enfants D'Izieu",
          },
          city: 'Reichenbach im Kandertal',
          coordinates: {
            latitude: '-53.7073',
            longitude: '-49.9865',
          },
          state: 'Uri',
          country: 'Switzerland',
          postcode: 2331,
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
        userId: 'testID',
      },
    ];

    expect(result.current.users).toStrictEqual(searchedUser);
  });

  it('should be able to search user by last name', async () => {
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
        {
          gender: 'male',
          name: {
            title: 'Monsieur',
            first: 'Arnaldo',
            last: 'Souza',
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
      result.current.fetchUsers();
    });

    await waitForNextUpdate();

    act(() => {
      result.current.searchUsers('Souza');
    });

    const searchedUser = [
      {
        gender: 'male',
        name: {
          title: 'Monsieur',
          first: 'Arnaldo',
          last: 'Souza',
        },
        location: {
          street: {
            number: 779,
            name: "Place des 44 Enfants D'Izieu",
          },
          city: 'Reichenbach im Kandertal',
          coordinates: {
            latitude: '-53.7073',
            longitude: '-49.9865',
          },
          state: 'Uri',
          country: 'Switzerland',
          postcode: 2331,
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
        userId: 'testID',
      },
    ];

    expect(result.current.users).toStrictEqual(searchedUser);
  });

  it('should be able to search user by NAT', async () => {
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
        {
          gender: 'male',
          name: {
            title: 'Monsieur',
            first: 'Arnaldo',
            last: 'Souza',
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
          nat: 'BR',
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
      result.current.fetchUsers();
    });

    await waitForNextUpdate();

    act(() => {
      result.current.searchUsers('BR');
    });

    const searchedUser = [
      {
        gender: 'male',
        name: {
          title: 'Monsieur',
          first: 'Arnaldo',
          last: 'Souza',
        },
        location: {
          street: {
            number: 779,
            name: "Place des 44 Enfants D'Izieu",
          },
          city: 'Reichenbach im Kandertal',
          coordinates: {
            latitude: '-53.7073',
            longitude: '-49.9865',
          },
          state: 'Uri',
          country: 'Switzerland',
          postcode: 2331,
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
        nat: 'BR',
        userId: 'testID',
      },
    ];

    expect(result.current.users).toStrictEqual(searchedUser);
  });
});
