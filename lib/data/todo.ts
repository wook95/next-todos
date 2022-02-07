import { readFileSync, writeFileSync } from 'fs';
import { TodoType } from '../../types/todo';

export const getTodoList = () => {
  const todos = readFileSync('data/todos.json').toString();
  if (!todos) {
    return [];
  }
  const returnTodo: TodoType[] = JSON.parse(todos);
  return returnTodo;
};

export const checkIsExistTodo = ({ id }: { id: number }) => {
  const todos = getTodoList();
  const isTodoExist = todos.some(todo => todo.id === id);
  return isTodoExist;
};

export const changeTodo = async (todos: TodoType[]) => {
  writeFileSync('data/todos.json', JSON.stringify(todos));
};
