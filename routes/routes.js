const getRounds = require('../gameplay.js').getRounds;

const attemptToThrow = (throws, choices) => (req, res) => (
  res.send(
    choices.includes(req.body.choice)
    ? throws.push(req.body) && `${req.body.name} throws ${req.body.choice}`
    : { status: 'error', message: `Please select one of the following: ${choices}` }
  )
);

const appRouter = (app) => {
  const throws = [];
  const choices = ['rock', 'paper', 'scissors'];

  app.get('/', (req, res) => res.send('Hello World'));
  app.get('/throws', (req, res) => res.send(throws));
  app.post('/rps', getRounds(throws, choices));
  app.post('/rps', attemptToThrow(throws, choices));
};

module.exports = appRouter;
