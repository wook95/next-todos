import styled, { css } from 'styled-components';
import { TodoType } from '../types/todo';
import TrashCanIcon from '../public/static/svg/trash-can.svg';
import CheckMarkIcon from '../public/static/svg/check-mark.svg';

interface ITodo {
  todos: TodoType[];
}

const TodoContents = ({ todos }: ITodo) => {
  return (
    <Container>
      <Header>
        <Title>
          남은 TODO
          <LastTodo> {todos?.length} </LastTodo>
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
      <Contents>
        {todos?.map(todo => (
          <ContentsItem key={todo.id}>
            <ContentLeft>
              <ColorBlock backGroundColor={todo.color} />
              <TodoText checked={todo.checked}>{todo.text}</TodoText>
            </ContentLeft>
            <ContentsRight>
              {todo.checked ? (
                <>
                  <TrashCan />
                  <CheckedMark />
                </>
              ) : (
                <CheckButton onClick={() => {}} />
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
`;

const CheckedMark = styled(CheckMarkIcon)`
  position: relative;
  left: 2px;

  fill: ${({ theme }) => theme.colors.green_2};
`;

const CheckButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #bababa;
  background-color: transparent;
  outline: none;
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

  todos?.forEach(todo => {
    const value = colors[todo.color];
    if (!value) colors[todo.color] = 1;
    else colors[todo.color] = value + 1;
  });
  return colors;
};

export default TodoContents;
