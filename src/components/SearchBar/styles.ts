import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 40px;

  position: relative;
  margin-top: 26px;

  > input {
    width: 100%;
    height: 100%;

    padding: 0 13px;
    border-radius: 4px;
    border: 2px solid var(--grey);

    &::placeholder {
      font-weight: bold;
      color: var(--grey);
      font-size: 15px;
    }
  }

  > svg {
    position: absolute;
    right: 13px;
    top: 12px;
  }
`;
