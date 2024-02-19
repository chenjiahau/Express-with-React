import express from 'express';

const router = express.Router();

const accounts = [
  {
    id: 1, name: 'allen',
    tasks: [
      { id: 1, name: 'Task 1', completed: false },
      { id: 2, name: 'Task 2', completed: true },
      { id: 3, name: 'Task 3', completed: false },
      { id: 4, name: 'Task 4', completed: true },
      { id: 5, name: 'Task 5', completed: false },
    ]
  },
  {
    id: 2, name: 'john',
    tasks: [
      { id: 1, name: 'Task 1', completed: true },
      { id: 2, name: 'Task 2', completed: true },
    ]
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function (req, res, next) {
  res.send({ message: 'Your express is connected to react!' });
});

router.get('/tasks/:account', function (req, res, next) {
  const account = accounts.find(account => account.name === req.params.account);
  if (account) {
    res.send(account.tasks);
  } else {
    res.status(404).send({ message: 'Account not found' });
  }
});

export default router;
