const express = require('express');
const router = require('./Routes/applicationRoutes');

const app = express();

app.use('/demo', router);

app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
