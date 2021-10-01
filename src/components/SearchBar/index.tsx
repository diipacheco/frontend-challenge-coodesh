import React from 'react';
import { RiUserSearchLine } from 'react-icons/ri';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Searching" />
      <RiUserSearchLine />
    </Container>
  );
};

export default SearchBar;
