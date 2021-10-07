import React, { useCallback, useState } from 'react';
import moment from 'moment';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineReload,
} from 'react-icons/ai';

import Modal from '../Modal';
import { IUser, useUsers } from '../../hooks/users';
import { useSortableData } from '../../hooks/useSortableData';

import { Container, LoadMoreButton, ViewButton } from './styles';

const Table: React.FC = () => {
  const { users, handleNextPage, filterUserInfo, user } = useUsers();
  const { sortedItems, requestSort, sortConfig } = useSortableData(users);
  const [modalIsOpen, setIsOpen] = useState(false);

  console.log(sortedItems);

  const handleModalOpen = useCallback(
    (userID: string) => {
      setIsOpen(true);
      filterUserInfo(userID);
    },
    [filterUserInfo],
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const renderTableData = useCallback(() => {
    return sortedItems?.map((item: IUser, index) => {
      const { name, gender, dob, userId } = item;

      return (
        <tr data-testid="content-row" key={index}>
          <td>{`${name?.first} ${name?.last}`}</td>
          <td>{gender}</td>
          <td>{moment(dob?.date).format('DD/MM/YYYY')}</td>
          <td>
            <ViewButton onClick={() => handleModalOpen(userId)} type="button">
              View
            </ViewButton>
          </td>
        </tr>
      );
    });
  }, [sortedItems, handleModalOpen]);

  return (
    <Container>
      <table>
        <tbody>
          <tr data-testid="categories-row">
            <th>
              Name
              <button
                data-testid="sort-button"
                onClick={() => requestSort('name')}
                type="button"
              >
                {sortConfig?.direction === 'ascending' ? (
                  <AiOutlineSortAscending size={20} fill="#293845" />
                ) : (
                  <AiOutlineSortDescending size={20} fill="#293845" />
                )}
              </button>
            </th>
            <th>Gender</th>
            <th>Birth</th>
            <th>Actions</th>
          </tr>
          {renderTableData()}
        </tbody>
      </table>
      <LoadMoreButton type="button" onClick={handleNextPage}>
        <AiOutlineReload size={20} fill="#293845" />
        Loading more...
      </LoadMoreButton>

      <Modal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        userInfo={user}
      />
    </Container>
  );
};

export default Table;
