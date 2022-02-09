import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <Title>wook`s todo-list</Title>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 0 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: #ff9481;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 21px;
  opacity: 1;
`;

export default Header;
