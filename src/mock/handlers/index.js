import { rest } from 'msw';
import { students } from '../data/students';
import { groups } from '../data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter((user) => user.group === req.params.group);
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }
    return res(ctx.status(200), ctx.json({ students }));
  }),

  rest.post('/students/search', (req, res, ctx) => {
    const { info } = req.body;
    const matchingStudents = info.split('').join('') !== '' ? students.filter((user) => user.name.toLowerCase().includes(info.toLowerCase())) : [];
    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),
];
