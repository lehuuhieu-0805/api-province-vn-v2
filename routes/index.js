const addressRouter = require('./address.route');

function route(app) {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use('/api/v1/address', addressRouter);
}

module.exports = route;