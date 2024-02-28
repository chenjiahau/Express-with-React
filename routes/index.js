import express from 'express';

const router = express.Router();

const tasks = [
  { id: 1, title: 'Task 1', completed: true },
  { id: 2, title: 'Task 2', completed: true },
];

/* GET home page. */
router.get('/', function (req, res) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function (req, res, next) {
  res.send({ message: 'Your express is connected to react!' });
});

router.get('/tasks', function (req, res) {
  res.send({ data: tasks });
});

export default router;