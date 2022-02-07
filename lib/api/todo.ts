import API from '.';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => API.get<TodoType[]>('api/todos');
