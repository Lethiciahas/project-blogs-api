const express = require('express');
const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const validateToken = require('./middleware/validateToken');
// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/user', validateToken, userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
