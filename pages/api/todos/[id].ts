import { NextApiRequest, NextApiResponse } from 'next';
import todoDataObject from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      const todoId = +req.query.id;
      const isTodoExist = todoDataObject.checkIsExistTodo({ id: todoId });
      if (!isTodoExist) {
        res.statusCode = 404;
        res.end();
      }
      const todos = await todoDataObject.getTodoList();
      const changedTodo = todos.map(todo => {
        if (todo.id === todoId) return { ...todo, checked: !todo.checked };
        return todo;
      });
      todoDataObject.changeTodo(changedTodo);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === 'DELETE') {
    try {
      const todoId = +req.query.id;
      const isTodoExist = todoDataObject.checkIsExistTodo({ id: todoId });
      if (!isTodoExist) {
        res.statusCode = 404;
        res.end();
      }

      const todos = todoDataObject.getTodoList();
      const filteredTodos = todos.filter(todo => todo.id !== todoId);
      todoDataObject.changeTodo(filteredTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 50;
      res.send(e);
    }

    res.statusCode = 405;
    res.end();
  }
  res.statusCode = 405;
  res.end();
};
