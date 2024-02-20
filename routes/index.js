import express from 'express';

const router = express.Router();

const accounts = [
  {
    id: 1, name: 'allen',
    tasks: [
    ]
  },
  {
    id: 2, name: 'john',
    tasks: [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: true },
    ]
  }
];

/* GET home page. */
router.get('/', function (req, res) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function (req, res, next) {
  res.send({ message: 'Your express is connected to react!' });
});

router.get('/tasks/:account', function (req, res) {
  const account = accounts.find(account => account.name === req.params.account);
  if (account) {
    res.send(account.tasks);
  } else {
    res.send([]);
  }
});

export default router;
