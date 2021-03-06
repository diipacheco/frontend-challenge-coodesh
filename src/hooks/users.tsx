import { createContext, useContext, useState, useCallback } from 'react';
import * as uuid from 'uuid';

import api from '../services/api';

interface ILocation {
  street: {
    number: number;
    name: string;
  };
  country: string;
  city: string;
  state: string;
  postcode: number;
}

export interface IUser {
  userId: string;
  id: {
    name: string;
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  cell: string;
  nat: string;
  location: ILocation;
}

interface IUserContextData {
  users: IUser[];
  user: IUser;

  loading: boolean;
  page: number;

  fetchUsers(): Promise<void>;
  filterUserInfo(id: string): void;
  handleNextPage(): void;
  searchUsers(text: string): void;
}

const UsersContext = createContext({} as IUserContextData);

export const UsersContextProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState([] as IUser[]);
  const [user, setUser] = useState({} as IUser);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchUsers = useCallback(async () => {
    setLoading(true);

    const response = await api.get(
      `?inc=id,picture,name,email,gender,dob,cell,nat,location&results=50&page=${page}`,
    );
    const usersWithId = response.data.results.map((item: IUser) => {
      const generatedID = uuid.v4();

      item.userId = generatedID;
      return item;
    });

    setUsers([...users, ...usersWithId]);
    setLoading(false);
  }, [page, users]);

  const filterUserInfo = useCallback(
    (id: string) => {
      const filteredUser = users?.find(item => item?.userId === id) as IUser;
      localStorage.setItem('filteredUser', JSON.stringify(filteredUser));
      setUser(filteredUser);
    },
    [users],
  );

  const searchUsers = useCallback(
    (text: string) => {
      const searchedUser = users.filter(item => {
        if (item?.name?.first === text) {
          return item;
        }
        if (item?.name?.last === text) {
          return item;
        }

        if (item?.nat === text) {
          return item;
        }
      });

      setUsers(searchedUser);
    },
    [users],
  );

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
    fetchUsers();
  }, [page, fetchUsers]);

  return (
    <UsersContext.Provider
      value={{
        users,
        user,
        fetchUsers,
        filterUserInfo,
        loading,
        page,
        handleNextPage,
        searchUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export function useUsers(): IUserContextData {
  const context = useContext(UsersContext);

  return context;
}
