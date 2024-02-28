import express from 'express';

const router = express.Router();

const tasks = [
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

router.post('/tasks', function (req, res) {
  const task = req.body;
  tasks.push(task);
  res.send({ data: task });
});

router.delete('/tasks/:id', function (req, res) {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id === Number(id));
  tasks.splice(index, 1);
  res.send({ data: id });
});

export default router;