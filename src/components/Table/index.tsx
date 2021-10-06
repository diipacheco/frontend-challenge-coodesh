import React, { useCallback } from 'react';
import moment from 'moment';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from 'react-icons/ai';

import { IUser, useUsers } from '../../hooks/users';
import { useSortableData } from '../../hooks/useSortableData';

import { Container } from './styles';

const Table: React.FC = () => {
  const { users } = useUsers();
  const { sortedItems, requestSort, sortConfig } = useSortableData(users);

  const renderTableData = useCallback(() => {
    return sortedItems?.map((user: IUser, index) => {
      const { name, gender, dob } = user;

      return (
        <tr data-testid="content-row" key={index}>
          <td>{`${name.first} ${name.last}`}</td>
          <td>{gender}</td>
          <td>{moment(dob.date).format('DD/MM/YYYY')}</td>
          <td>teste</td>
        </tr>
      );
    });
  }, [sortedItems]);

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
    </Container>
  );
};

export default Table;
