import styled from 'styled-components';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 15px 30px;

  display: flex;
  align-items: center;
  flex-direction: column;

  position: relative;

  > h1 {
    margin-top: 25px;
  }

  div {
    margin-top: 14px;
  }
`;

export const UserInfoSection = styled.div`
  display: flex;

  width: 100%;
  align-self: flex-start;

  > strong {
    font-size: 18px;
    color: var(--blue);
  }

  > p {
    margin-left: 10px;
  }

  > a {
    font-size: 18px;
    color: var(--blue);
  }
`;

interface IAvatarContainer {
  urlAvatar: string;
}

export const AvatarContainer = styled.div<IAvatarContainer>`
  width: 100px;
  height: 100px;

  border-radius: 50%;

  background-image: ${props => `url(${props.urlAvatar})`};
  background-color: #ccc;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  cursor: pointer;

  top: -16px;
  right: -10px;
`;
