import styled from 'styled-components';
import { TodoType } from '../types/todo';

interface ITodo {
  todos: TodoType[];
}

const TodoContents = ({ todos }: ITodo) => {
  return (
    <Container>
      <Header>
        <Title>
          남은 TODO
          <LastTodo> {todos.length} </LastTodo>
        </Title>
        <Colors>
          {Object.keys(getTodoColors(todos)).map(color => (
            <ColorWrapper key={color}>
              <ColorCircle circleColor={color} />
              <ColorWord> {getTodoColors(todos)[color]}</ColorWord>
            </ColorWrapper>
          ))}
        </Colors>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: 15px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const LastTodo = styled.p`
  margin-left: 10px;
`;

const Colors = styled.div`
  display: flex;
`;

const ColorWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`;

const ColorCircle = styled.div<{ circleColor: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme, circleColor }) => theme.colors[circleColor]};
`;

const ColorWord = styled.p`
  margin: 0 6px 0 0;
  font-size: 14px;
  line-height: 16px;
`;

type ObjectIndexType = {
  [key: string]: number | undefined;
};

const getTodoColors = (todos: TodoType[]) => {
  const colors: ObjectIndexType = {
    red: 0,
    orange: 0,
    yellow: 0,
    green: 0,
    blue: 0,
    navy: 0,
  };

  todos.forEach(todo => {
    const value = colors[todo.color];
    if (!value) colors[todo.color] = 1;
    else colors[todo.color] = value + 1;
  });
  return colors;
};

export default TodoContents;
