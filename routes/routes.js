const choices = ['rock', 'paper', 'scissors'];
const appRouter = (app) => {
  app.get('/', (req, res) => res.send('Hello World'));
  app.post('/rps', (req, res) =>
    res.send(
      choices.includes(req.body.choice)
      ? `${req.body.name} throws ${req.body.choice}`
      : { status: 'error', message: `Please select one of the following: ${choices}` }
    )
  );
};

module.exports = appRouter;
