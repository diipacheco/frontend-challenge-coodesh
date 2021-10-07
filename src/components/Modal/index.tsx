import React from 'react';
import ReactModal from 'react-modal';
import moment from 'moment';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { IUser } from '../../hooks/users';

import {
  Content,
  UserInfoSection,
  AvatarContainer,
  CloseModalButton,
} from './styles';

interface IModalProps {
  modalIsOpen: boolean;
  closeModal(): void;
  userInfo: IUser;
}

const customStyles = {
  overlay: {
    backgroundColor: 'rgb(2%, 2%, 2%, 0.2)',
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 530,
  },
};

const Modal: React.FC<IModalProps> = ({
  modalIsOpen,
  closeModal,
  userInfo,
}) => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
    >
      <Content>
        <CloseModalButton type="button" onClick={closeModal}>
          <MdClose size={30} />
        </CloseModalButton>
        <AvatarContainer urlAvatar={userInfo?.picture?.large} />

        <h1>{`${userInfo?.name?.first} ${userInfo?.name?.last}`}</h1>

        <UserInfoSection>
          <strong>Email:</strong>
          <p>{userInfo?.email}</p>
        </UserInfoSection>

        <UserInfoSection>
          <strong>Gender:</strong>
          <p>{userInfo?.gender}</p>
        </UserInfoSection>

        <UserInfoSection>
          <strong>Birth:</strong>
          <p>{moment(userInfo?.dob?.date).format('DD/MM/YYYY')}</p>
        </UserInfoSection>

        <UserInfoSection>
          <strong>Phone:</strong>
          <p>{userInfo?.cell}</p>
        </UserInfoSection>

        <UserInfoSection>
          <strong>NAT:</strong>
          <p>{userInfo?.nat}</p>
        </UserInfoSection>

        <UserInfoSection>
          <strong>Address:</strong>
          <p>{`${userInfo?.location?.street?.name}, ${userInfo?.location?.street?.number} - ${userInfo?.location?.state} - ${userInfo?.location?.city}`}</p>
        </UserInfoSection>

        <UserInfoSection>
          <strong>ID:</strong>
          <p>{`${userInfo?.id?.name} - ${userInfo?.id?.value}`}</p>
        </UserInfoSection>

        <UserInfoSection>
          <Link to={`/profile/${userInfo?.userId}`}>URL</Link>
        </UserInfoSection>
      </Content>
    </ReactModal>
  );
};

export default Modal;
