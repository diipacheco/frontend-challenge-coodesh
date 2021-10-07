import { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';

interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: string;
}

export interface IUser {
  userId: number;
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
    age: string;
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

    setUsers([...users, ...response.data.results]);
    setLoading(false);
  }, [page, users]);

  const filterUserInfo = useCallback(
    (id: string) => {
      const filteredUser = users?.find(item => item?.id?.value === id) as IUser;

      setUser(filteredUser);
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
