import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 45px 0;

  table {
    border-spacing: 0;
    border: 1px solid var(--medium-dark-grey);
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      th {
        background-color: #c3cfd9;
        color: #293845;
        position: relative;

        > button {
          cursor: pointer;
          position: absolute;
          right: 8px;
          top: 14px;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 15px 25px;
      border-bottom: 1px solid var(--medium-dark-grey);
      border-right: 1px solid var(--medium-dark-grey);
      text-align: center;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-weight: bold;
  font-size: 20px;
  color: #293845;

  margin-top: 25px;

  > svg {
    margin-right: 10px;
  }
`;
