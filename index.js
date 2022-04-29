const express = require('express');
const cors = require('cors');
const routerPersonagens = require('./src/routes/personagens-route');
const routerUsers = require('./src/routes/users-route.js')
const routerAuth = require('./src/routes/auth-route.js')
const connectToDatabase = require('./src/database/database.js');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/', routerPersonagens);
app.use('/', routerUsers);
app.use('/', routerAuth);


app.listen(port, ()=>{
    console.log(`Sevidor rodando em http://localhost:${port}`);
})

