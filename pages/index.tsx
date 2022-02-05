import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <h1>123</h1>
      <h2>321</h2>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  background-color: tomato;
`;
