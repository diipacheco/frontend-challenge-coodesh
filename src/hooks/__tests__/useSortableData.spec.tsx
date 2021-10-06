import { renderHook } from '@testing-library/react-hooks';

import { act } from 'react-dom/test-utils';
import { useSortableData } from '../useSortableData';

describe('UseSortableDataHook', () => {
  it('should be able to alphabetic A-Z sort by users name', () => {
    const usersData = [
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Joan',
          last: 'Pena',
        },
        location: {
          street: {
            number: 5594,
            name: 'W Pecan St',
          },
          city: 'Perth',
          state: 'South Australia',
          country: 'Australia',
          postcode: 5914,
          coordinates: {
            latitude: '-81.3838',
            longitude: '103.7232',
          },
          timezone: {
            offset: '+5:30',
            description: 'Bombay, Calcutta, Madras, New Delhi',
          },
        },
        email: 'joan.pena@example.com',
        login: {
          uuid: '7b2b8ea8-4d57-40bc-839f-3a55044857e7',
          username: 'whiteduck708',
          password: 'moose',
          salt: '2vEcSVdn',
          md5: 'a20c3feabeb64957f3692e995496e4dc',
          sha1: 'ffa6443e49c5777ddfe2da0f43e7ed3d41a77c68',
          sha256:
            '4f46427c2b85b7e39c057fdf76fdfa04c2e1f19126f95ed6759c90bdc522e98a',
        },
        dob: {
          date: '1963-03-17T15:32:19.507Z',
          age: 58,
        },
        registered: {
          date: '2008-08-12T15:25:43.752Z',
          age: 13,
        },
        phone: '02-2534-9494',
        cell: '0442-805-194',
        id: {
          name: 'TFN',
          value: '239411168',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/0.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/0.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/0.jpg',
        },
        nat: 'AU',
      },
      {
        gender: 'female',
        name: {
          title: 'Ms',
          first: 'سارینا',
          last: 'موسوی',
        },
        location: {
          street: {
            number: 5769,
            name: 'سهروردی',
          },
          city: 'بابل',
          state: 'خوزستان',
          country: 'Iran',
          postcode: 39692,
          coordinates: {
            latitude: '74.5386',
            longitude: '-35.9826',
          },
          timezone: {
            offset: '+10:00',
            description: 'Eastern Australia, Guam, Vladivostok',
          },
        },
        email: 'sryn.mwswy@example.com',
        login: {
          uuid: '74d092e7-35e7-4132-9e9b-c7aef9526517',
          username: 'tinypeacock202',
          password: 'ronald',
          salt: 'hEa7Qkj1',
          md5: '596b2ca7259e3cc7c88d51eecb8d12b8',
          sha1: '5951ef8288b24c74152f20afa97f2ce77fdf8269',
          sha256:
            'ea4d82bee709536576cf44abce945a05daca409c0606d078eda0a94dcc61cf74',
        },
        dob: {
          date: '1956-08-06T09:35:08.267Z',
          age: 65,
        },
        registered: {
          date: '2011-06-06T08:34:38.883Z',
          age: 10,
        },
        phone: '011-55553432',
        cell: '0934-398-7408',
        id: {
          name: '',
          value: null,
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/71.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg',
        },
        nat: 'IR',
      },
      {
        gender: 'female',
        name: {
          title: 'Madame',
          first: 'Marisa',
          last: 'Renard',
        },
        location: {
          street: {
            number: 6574,
            name: 'Rue des Cuirassiers',
          },
          city: 'Schiers',
          state: 'Nidwalden',
          country: 'Switzerland',
          postcode: 4637,
          coordinates: {
            latitude: '-88.7096',
            longitude: '161.1125',
          },
          timezone: {
            offset: '-7:00',
            description: 'Mountain Time (US & Canada)',
          },
        },
        email: 'marisa.renard@example.com',
        login: {
          uuid: 'a22dcec1-38b2-4298-8857-54666fcc70d3',
          username: 'bluewolf133',
          password: 'deadpool',
          salt: '9gYcNNm1',
          md5: 'fbab22e25a3c4dd03bb42d70a79b3a6b',
          sha1: '5baf5f27956fa521fdabfa8aa1c987cbac62d3b9',
          sha256:
            '07f3accc1fbf9e4c37121529b949ad4d140a40d677c06703b3a2cc88341e35ee',
        },
        dob: {
          date: '1974-07-29T10:05:21.306Z',
          age: 47,
        },
        registered: {
          date: '2006-12-18T16:01:57.016Z',
          age: 15,
        },
        phone: '078 685 23 02',
        cell: '078 763 41 05',
        id: {
          name: 'AVS',
          value: '756.2038.3338.95',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/81.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
        },
        nat: 'CH',
      },
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Ella',
          last: 'Evans',
        },
        location: {
          street: {
            number: 56,
            name: 'Portobello Road',
          },
          city: 'Lower Hutt',
          state: 'Northland',
          country: 'New Zealand',
          postcode: 49191,
          coordinates: {
            latitude: '23.9080',
            longitude: '59.9067',
          },
          timezone: {
            offset: '+3:00',
            description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
          },
        },
        email: 'ella.evans@example.com',
        login: {
          uuid: 'd13abc86-f1d0-4aa3-942f-084df69ae835',
          username: 'crazygoose844',
          password: 'helpme',
          salt: 'npDnOsz2',
          md5: '8002c5415df8eb46b715cf9a99c16e05',
          sha1: '549f8bad8d897a640fc89611043e53038353f0fb',
          sha256:
            '12f7e89933b7615806ba4b447f39e1e4cc613e6caec83254c850bedcc2146b0f',
        },
        dob: {
          date: '1949-11-29T12:30:10.155Z',
          age: 72,
        },
        registered: {
          date: '2009-07-18T05:45:58.941Z',
          age: 12,
        },
        phone: '(554)-469-6600',
        cell: '(626)-570-1459',
        id: {
          name: '',
          value: null,
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/56.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/56.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/56.jpg',
        },
        nat: 'NZ',
      },
    ];

    const { result } = renderHook(() => useSortableData(usersData));

    act(() => {
      result.current.requestSort('name');
    });

    expect(result.current.sortedItems[0].name.first).toEqual('Ella');
  });
  it('should be able to alphabetic Z-A sort by users name', () => {
    const usersData = [
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Joan',
          last: 'Pena',
        },
        location: {
          street: {
            number: 5594,
            name: 'W Pecan St',
          },
          city: 'Perth',
          state: 'South Australia',
          country: 'Australia',
          postcode: 5914,
          coordinates: {
            latitude: '-81.3838',
            longitude: '103.7232',
          },
          timezone: {
            offset: '+5:30',
            description: 'Bombay, Calcutta, Madras, New Delhi',
          },
        },
        email: 'joan.pena@example.com',
        login: {
          uuid: '7b2b8ea8-4d57-40bc-839f-3a55044857e7',
          username: 'whiteduck708',
          password: 'moose',
          salt: '2vEcSVdn',
          md5: 'a20c3feabeb64957f3692e995496e4dc',
          sha1: 'ffa6443e49c5777ddfe2da0f43e7ed3d41a77c68',
          sha256:
            '4f46427c2b85b7e39c057fdf76fdfa04c2e1f19126f95ed6759c90bdc522e98a',
        },
        dob: {
          date: '1963-03-17T15:32:19.507Z',
          age: 58,
        },
        registered: {
          date: '2008-08-12T15:25:43.752Z',
          age: 13,
        },
        phone: '02-2534-9494',
        cell: '0442-805-194',
        id: {
          name: 'TFN',
          value: '239411168',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/0.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/0.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/0.jpg',
        },
        nat: 'AU',
      },
      {
        gender: 'female',
        name: {
          title: 'Ms',
          first: 'Zinedine',
          last: 'Zidane',
        },
        location: {
          street: {
            number: 5769,
            name: 'سهروردی',
          },
          city: 'بابل',
          state: 'خوزستان',
          country: 'Iran',
          postcode: 39692,
          coordinates: {
            latitude: '74.5386',
            longitude: '-35.9826',
          },
          timezone: {
            offset: '+10:00',
            description: 'Eastern Australia, Guam, Vladivostok',
          },
        },
        email: 'sryn.mwswy@example.com',
        login: {
          uuid: '74d092e7-35e7-4132-9e9b-c7aef9526517',
          username: 'tinypeacock202',
          password: 'ronald',
          salt: 'hEa7Qkj1',
          md5: '596b2ca7259e3cc7c88d51eecb8d12b8',
          sha1: '5951ef8288b24c74152f20afa97f2ce77fdf8269',
          sha256:
            'ea4d82bee709536576cf44abce945a05daca409c0606d078eda0a94dcc61cf74',
        },
        dob: {
          date: '1956-08-06T09:35:08.267Z',
          age: 65,
        },
        registered: {
          date: '2011-06-06T08:34:38.883Z',
          age: 10,
        },
        phone: '011-55553432',
        cell: '0934-398-7408',
        id: {
          name: '',
          value: null,
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/71.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/71.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/71.jpg',
        },
        nat: 'IR',
      },
      {
        gender: 'female',
        name: {
          title: 'Madame',
          first: 'Marisa',
          last: 'Renard',
        },
        location: {
          street: {
            number: 6574,
            name: 'Rue des Cuirassiers',
          },
          city: 'Schiers',
          state: 'Nidwalden',
          country: 'Switzerland',
          postcode: 4637,
          coordinates: {
            latitude: '-88.7096',
            longitude: '161.1125',
          },
          timezone: {
            offset: '-7:00',
            description: 'Mountain Time (US & Canada)',
          },
        },
        email: 'marisa.renard@example.com',
        login: {
          uuid: 'a22dcec1-38b2-4298-8857-54666fcc70d3',
          username: 'bluewolf133',
          password: 'deadpool',
          salt: '9gYcNNm1',
          md5: 'fbab22e25a3c4dd03bb42d70a79b3a6b',
          sha1: '5baf5f27956fa521fdabfa8aa1c987cbac62d3b9',
          sha256:
            '07f3accc1fbf9e4c37121529b949ad4d140a40d677c06703b3a2cc88341e35ee',
        },
        dob: {
          date: '1974-07-29T10:05:21.306Z',
          age: 47,
        },
        registered: {
          date: '2006-12-18T16:01:57.016Z',
          age: 15,
        },
        phone: '078 685 23 02',
        cell: '078 763 41 05',
        id: {
          name: 'AVS',
          value: '756.2038.3338.95',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/81.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
        },
        nat: 'CH',
      },
      {
        gender: 'female',
        name: {
          title: 'Miss',
          first: 'Ella',
          last: 'Evans',
        },
        location: {
          street: {
            number: 56,
            name: 'Portobello Road',
          },
          city: 'Lower Hutt',
          state: 'Northland',
          country: 'New Zealand',
          postcode: 49191,
          coordinates: {
            latitude: '23.9080',
            longitude: '59.9067',
          },
          timezone: {
            offset: '+3:00',
            description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
          },
        },
        email: 'ella.evans@example.com',
        login: {
          uuid: 'd13abc86-f1d0-4aa3-942f-084df69ae835',
          username: 'crazygoose844',
          password: 'helpme',
          salt: 'npDnOsz2',
          md5: '8002c5415df8eb46b715cf9a99c16e05',
          sha1: '549f8bad8d897a640fc89611043e53038353f0fb',
          sha256:
            '12f7e89933b7615806ba4b447f39e1e4cc613e6caec83254c850bedcc2146b0f',
        },
        dob: {
          date: '1949-11-29T12:30:10.155Z',
          age: 72,
        },
        registered: {
          date: '2009-07-18T05:45:58.941Z',
          age: 12,
        },
        phone: '(554)-469-6600',
        cell: '(626)-570-1459',
        id: {
          name: '',
          value: null,
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/56.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/56.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/56.jpg',
        },
        nat: 'NZ',
      },
    ];

    const { result } = renderHook(() => useSortableData(usersData));

    act(() => {
      result.current.requestSort('name');
    });

    act(() => {
      result.current.requestSort('name');
    });

    expect(result.current.sortedItems[0].name.first).toEqual('Zinedine');
  });
  it(`should not be short wen doesn't have a proper filter key name`, () => {
    const usersData = [
      {
        gender: 'male',
        name: {
          title: 'Mr',
          first: 'Zinedine',
          last: 'Zidane',
        },
        location: {
          street: {
            number: 4271,
            name: 'Pøt Strandby',
          },
          city: 'Nørre Sundby',
          state: 'Midtjylland',
          country: 'Denmark',
          postcode: 98046,
          coordinates: {
            latitude: '0.7766',
            longitude: '-78.5579',
          },
          timezone: {
            offset: '+8:00',
            description: 'Beijing, Perth, Singapore, Hong Kong',
          },
        },
        email: 'oliver.petersen@example.com',
        login: {
          uuid: '83947ee8-b56b-4cd6-a87f-f3abf1ca7b28',
          username: 'sadcat560',
          password: 'james',
          salt: '7nQS0gUO',
          md5: '74779e715054050f85e88c4996ba253b',
          sha1: '0beba14569d4668e6915b3f729fe39962847f7f5',
          sha256:
            'ddbd30bf9f5679b63d911ea233406e86d70ca802ec787f4d5da10c0d5fde7396',
        },
        dob: {
          date: '1988-04-25T12:19:08.140Z',
          age: 33,
        },
        registered: {
          date: '2004-02-02T00:36:32.779Z',
          age: 17,
        },
        phone: '54793291',
        cell: '91257417',
        id: {
          name: 'CPR',
          value: '250488-3981',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/63.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/63.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/63.jpg',
        },
        nat: 'DK',
      },
      {
        gender: 'female',
        name: {
          title: 'Ms',
          first: 'Arnaldo',
          last: 'Coelho',
        },
        location: {
          street: {
            number: 9793,
            name: 'Birger Aaneruds vei',
          },
          city: 'Leikanger',
          state: 'Oppland',
          country: 'Norway',
          postcode: '6507',
          coordinates: {
            latitude: '50.3352',
            longitude: '145.0917',
          },
          timezone: {
            offset: '+3:00',
            description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
          },
        },
        email: 'moa.finsrud@example.com',
        login: {
          uuid: 'b3b9f179-cc9f-403e-98d9-126e85b390c8',
          username: 'organiccat253',
          password: 'sparky1',
          salt: 'UK7ao5hF',
          md5: 'bbbefce39e311fbef69e0d1ce91ea36e',
          sha1: '34aa6484436fa224867c45ca83ac6168d36462cf',
          sha256:
            '6ffd131eef3b7d19e58cb86b7e26ed21cf890eb4049b48057908637eecf08e44',
        },
        dob: {
          date: '1967-05-15T11:12:41.685Z',
          age: 54,
        },
        registered: {
          date: '2017-08-26T05:00:06.061Z',
          age: 4,
        },
        phone: '57260755',
        cell: '45152488',
        id: {
          name: 'FN',
          value: '15056724645',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/women/52.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/52.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
        },
        nat: 'NO',
      },
    ];

    const { result } = renderHook(() => useSortableData(usersData));

    act(() => {
      result.current.requestSort('age');
    });

    expect(result.current.sortedItems[0].name.first).toEqual('Zinedine');
  });
});
