import type { NextPage } from 'next';
import styled from 'styled-components';
import TodoContents from '../components/TodoContents';
import todos from '../constants/todo';

const Home: NextPage = () => {
  return (
    <Container>
      <TodoContents todos={todos} />
    </Container>
  );
};
export default Home;

const Container = styled.div`
  /* background-color: tomato; */
`;
