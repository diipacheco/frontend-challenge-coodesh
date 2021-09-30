import React, { useEffect } from 'react';

import { useUsers } from '../../hooks/users';

import { Container } from './styles';

const Header: React.FC = () => {
  const { user, filterUserInfo } = useUsers();

  useEffect(() => {
    const { value } = user?.id;
    filterUserInfo(value);
  }, [filterUserInfo, user]);

  return (
    <Container>
      <h1>Pharma Inc</h1>

      <img
        data-testid="user-avatar-img"
        src={user?.picture?.medium}
        alt={`${user?.name?.first} ${user?.name?.last} Avatar`}
      />
    </Container>
  );
};

export default Header;
