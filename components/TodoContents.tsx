import { useState } from 'react';
import styled from 'styled-components';
import { TodoType } from '../types/todo';
import TrashCanIcon from '../public/static/svg/trash-can.svg';
import CheckMarkIcon from '../public/static/svg/check-mark.svg';
import { checkTodoAPI, deleteTodoAPI } from '../lib/api/todo';
import { COLORS } from '../constants/colors';

interface ITodo {
  todos: TodoType[];
}

type ColorToNumberType = {
  [key: string]: number | undefined;
};

const TodoContents = ({ todos }: ITodo) => {
  const [localTodo, setLocalTodo] = useState(todos);

  const checkTodo = async (id: number) => {
    try {
      await checkTodoAPI(id);
      console.log('체크완료');
      const newTodos = localTodo.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      setLocalTodo(newTodos);
    } catch (e) {
      console.log(e);
    }
  };

  const getTodoColors = (myTodos: TodoType[]) => {
    const colors = COLORS.reduce((target: ColorToNumberType, key) => {
      target[key] = 0;
      return target;
    }, {});

    myTodos?.forEach(todo => {
      const value = colors[todo.color];
      if (!value) colors[todo.color] = 1;
      else colors[todo.color] = value + 1;
    });
    return colors;
  };

  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id);
      const newTodos = localTodo.filter(todo => todo.id !== id);
      setLocalTodo(newTodos);
      console.log('삭제 완료');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          남은 TODO
          <LastTodo> {localTodo?.length} </LastTodo>
        </Title>
        <Colors>
          {Object.keys(getTodoColors(localTodo)).map(color => (
            <ColorWrapper key={color}>
              <ColorCircle circleColor={color} />
              <ColorWord> {getTodoColors(localTodo)[color]}</ColorWord>
            </ColorWrapper>
          ))}
        </Colors>
      </Header>
      <Contents>
        {localTodo?.map(todo => (
          <ContentsItem key={todo.id}>
            <ContentLeft>
              <ColorBlock backGroundColor={todo.color} />
              <TodoText checked={todo.checked}>{todo.text}</TodoText>
            </ContentLeft>
            <ContentsRight>
              {todo.checked ? (
                <>
                  <TrashCan onClick={() => deleteTodo(todo.id)} />
                  <CheckedMark onClick={() => checkTodo(todo.id)} />
                </>
              ) : (
                <CheckButton onClick={() => checkTodo(todo.id)} />
              )}
            </ContentsRight>
          </ContentsItem>
        ))}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 15px;
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

const Contents = styled.ul``;

const ContentsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const ContentLeft = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ColorBlock = styled.div<{ backGroundColor: string }>`
  width: 12px;
  height: 100%;
  background-color: ${({ theme, backGroundColor }) =>
    theme.colors[backGroundColor]};
`;

const TodoText = styled.p<{ checked: boolean }>`
  margin-left: 12px;
  ${({ theme, checked }) =>
    checked &&
    `
      color: ${theme.colors.gray};
      text-decoration: line-through;
    `};
`;

const ContentsRight = styled.div`
  display: flex;
  margin-left: 12px;
  & > * + * {
    margin-left: 15px;
  }
`;

const TrashCan = styled(TrashCanIcon)`
  path {
    fill: ${({ theme }) => theme.colors.green_2};
  }
  cursor: pointer;
`;

const CheckedMark = styled(CheckMarkIcon)`
  position: relative;
  left: 2px;
  cursor: pointer;

  fill: ${({ theme }) => theme.colors.green_2};
`;

const CheckButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #bababa;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export default TodoContents;
