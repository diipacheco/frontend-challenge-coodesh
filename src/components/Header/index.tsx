import React from 'react';
import { MdPerson } from 'react-icons/md';

import { Container, ProfileImageContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Pharma Inc</h1>

      <ProfileImageContainer>
        <MdPerson size={24} color="#A2B0BD" />
      </ProfileImageContainer>
    </Container>
  );
};

export default Header;
