import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>wook`s todo-list</Title>
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
`;

const Title = styled.h1`
  font-size: 21px;
`;

export default Header;
