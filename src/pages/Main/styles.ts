import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  height: 100%;

  flex-direction: column;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 650px;

  align-self: center;
  justify-self: center;

  margin-top: 80px;

  > h5 {
    font-size: 16px;
  }
`;
