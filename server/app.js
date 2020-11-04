const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

const loginRouter = require('./src/routes/login');

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);

app.listen(process.env.PORT || 3001, (err) => {
  if (err) throw err;
  console.log(`Server listening on port ${process.env.PORT}`);
});
