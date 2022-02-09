import type { NextApiRequest, NextApiResponse } from 'next';
import todoDataObject from '../../../lib/data';
import { TodoType } from '../../../types/todo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const todos = todoDataObject.getTodoList();
      res.statusCode = 200;
      res.send(todos);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === 'POST') {
    const { text, color } = req.body;
    if (!text || !color) {
      res.statusCode = 400;
      res.send('text 혹은 color가 없습니다.');
    }

    const todos = todoDataObject.getTodoList();

    let todoId: number;
    if (todos.length > 0) todoId = todos[todos.length - 1].id + 1;
    else todoId = 1;
    const newTodo: TodoType = {
      id: todoId,
      text,
      color,
      checked: false,
    };
    todoDataObject.changeTodo([...todos, newTodo]);
    res.statusCode = 200;
    res.end();
  }

  res.statusCode = 405;
  res.end();
}
