import React from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import { Container, Content } from './styles';

const Main: React.FC = () => {
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
      </Content>
    </Container>
  );
};

export default Main;
