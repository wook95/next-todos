import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import { TodoType } from '../../types/todo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const todos = readFileSync('data/todos.json').toString();
      if (!todos) {
        res.statusCode = 200;
        res.send([]);
      }
      res.statusCode = 200;
      const returnTodo: TodoType[] = JSON.parse(todos);
      res.send(returnTodo);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  res.end();
}
