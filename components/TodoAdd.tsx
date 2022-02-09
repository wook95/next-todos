import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoType } from '../types/todo';
import { COLORS } from '../constants/colors';
import Brush from '../public/static/svg/brush.svg';

const TodoAdd = (): JSX.Element => {
  const [text, setText] = useState('');
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.currentTarget.value);

  const [selectedColor, setSelectedColor] = useState<TodoType['color']>();
  const chooseColor = (target: TodoType['color']) => setSelectedColor(target);
  console.log(selectedColor);
  return (
    <Container>
      <Header>
        <Title>Add todo</Title>
        <SubmitButton type="button" onClick={() => {}}>
          추가하기
        </SubmitButton>
      </Header>
      <ColorContainer>
        <ColorList>
          {COLORS.map(color => (
            <ColorButton
              key={color}
              type="button"
              buttonColor={color}
              borderColor={selectedColor === color ? '#000' : 'transparent'}
              onClick={() => chooseColor(color)}
            />
          ))}
        </ColorList>
        <Brush />
      </ColorContainer>
      <StyledTextArea value={text} onChange={changeText} />
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 21px;
`;

const SubmitButton = styled.button`
  padding: 4px 8px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;

  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(80%);
  }
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const ColorList = styled.div``;

const ColorButton = styled.button<{ buttonColor: string; borderColor: string }>`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border: 3px solid ${props => props.borderColor};
  border-radius: 50%;
  background-color: ${props => props.theme.colors[props.buttonColor]};

  &:hover {
    border: 3px solid #888;
  }
`;

const StyledTextArea = styled.textarea`
  margin-top: 24px;
  padding: 12px;
  width: 100%;
  height: 300px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 5px;
  outline: 0;
  resize: none;
`;

export default TodoAdd;
