import React, { useCallback } from 'react';

import { useUsers } from '../../hooks/users';

import { Container } from './styles';

const Table: React.FC = () => {
  const { users } = useUsers();

  const renderTableData = useCallback(() => {
    return users?.map((user, index) => {
      const { name, gender, dob } = user;
      const birthDate = new Date(dob.date);

      return (
        <tr data-testid="content-row" key={index}>
          <td>{`${name.first} ${name.last}`}</td>
          <td>{gender}</td>
          {birthDate && (
            <td>{Intl.DateTimeFormat('pt-br').format(birthDate)}</td>
          )}
          <td>teste</td>
        </tr>
      );
    });
  }, [users]);

  return (
    <Container>
      <table>
        <tbody>
          <tr data-testid="categories-row">
            <th>Name</th>
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
