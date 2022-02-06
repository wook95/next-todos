import { ReactChildren } from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const CenteredContainer = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 650px;
  width: 100%;
  height: 100vh;
`;

export default CenteredContainer;
