import API from '.';
import { TodoType } from '../../types/todo';

interface AddTodoAPIBody {
  text: string;
  color: TodoType['color'];
}

export const getTodosAPI = () => API.get<TodoType[]>('api/todos');
export const checkTodoAPI = (id: number) => API.patch(`api/todos/${id}`);
export const addTodoAPI = (body: AddTodoAPIBody) => API.post('api/todos', body);
export const deleteTodoAPI = (id: number) => API.delete(`api/todos/${id}`);
