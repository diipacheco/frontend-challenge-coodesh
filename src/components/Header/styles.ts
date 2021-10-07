import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);

  padding: 20px 56px;

  > a {
    text-decoration: none;
    > h1 {
      color: var(--blue);
    }
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-radius: 50%;

  background: var(--grey);
`;
