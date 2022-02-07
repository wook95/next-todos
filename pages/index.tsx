import type { GetServerSideProps, NextPage } from 'next';
import TodoContents from '../components/TodoContents';
import { TodoType } from '../types/todo';
import { getTodosAPI } from '../lib/api/todo';

interface Props {
  todos: TodoType[];
}

const Home: NextPage<Props> = ({ todos }: Props) => {
  return <TodoContents todos={todos} />;
};
export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};
