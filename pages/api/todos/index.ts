import { readFileSync } from 'fs';
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

  res.statusCode = 405;
  res.end();
}
