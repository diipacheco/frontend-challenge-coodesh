import React from 'react';
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, ProfileImageContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <h1>Pharma Inc</h1>
      </Link>

      <ProfileImageContainer>
        <MdPerson size={24} color="#A2B0BD" />
      </ProfileImageContainer>
    </Container>
  );
};

export default Header;
