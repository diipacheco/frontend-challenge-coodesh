import React, { useEffect } from 'react';

import { useUsers } from '../../hooks/users';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  const { fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Container>
      <Header />
      <Content>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          mollis, magna ac varius fringilla, metus tellus ornare dui, non
          aliquet augue mi auctor massa mauris.
        </h5>

        <SearchBar />

        <Table />
      </Content>
    </Container>
  );
};

export default Main;
