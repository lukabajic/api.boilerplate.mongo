const express = require('express');
const mongoose = require('mongoose');

const { port, mongoUrl, site } = require('./config');

// routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const roleRoutes = require('./routes/role');

const rootUrl = `http://localhost:${port}`;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index', { site });
});

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/role', roleRoutes);

mongoose
  .connect(mongoUrl, options)
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        throw err;
      }
      process.env.CONFIG === 'dev' && console.log(`> Ready on ${rootUrl}`);
    });
  })
  .catch((err) => console.log(err));
