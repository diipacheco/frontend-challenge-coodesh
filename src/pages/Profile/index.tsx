import React, { useState, useCallback, useEffect } from 'react';

import { IUser } from '../../hooks/users';

import Modal from '../../components/Modal';
import Header from '../../components/Header';

import { Container } from './styles';

const Profile: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [localStorageFilteredUser, setLocalStorageFilteredUser] = useState(
    {} as IUser,
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setIsOpen(true);
    const filteredUser = localStorage.getItem('filteredUser') as string;
    setLocalStorageFilteredUser(JSON.parse(filteredUser));
  }, []);

  return (
    <Container>
      <Header />
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        userInfo={localStorageFilteredUser}
      />
    </Container>
  );
};

export default Profile;
