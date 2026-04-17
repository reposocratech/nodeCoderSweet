const express = require('express');
require('dotenv').config();
const usersRouter = require('./routes/users/usersRoutes');

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: false }));

//permite que en la req lleguen json en req.body
app.use(express.json());

app.use("/users", usersRouter);

app.listen(port, ()=>console.log(`Corriendo por el puerto ${port}`));