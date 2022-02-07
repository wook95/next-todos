import API from '.';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => API.get<TodoType[]>('api/todos');
export const checkTodoAPI = (id: number) => API.patch(`api/todos/${id}`);
