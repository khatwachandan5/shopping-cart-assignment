const canned = require("canned");
// const http = require("http");
// const opts = {
//   cors: true,
//   cors_headers: [
//     {
//       "Access-Control-Allow-Origin": "*",
//     },
//   ],
// };

// const connector = canned("./server", opts);
// const port = 8081;

// console.log(`Server listening on ${port}`);

// http.createServer(connector).listen(port);


// below is my working backend code with login and graphql data for product, category and banner

const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const db = require('./db');
const dotenv = require("dotenv");

dotenv.config();

const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');
const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));
const resolvers = require('./resolvers');
const context = ({req}) => ({user: req.user && db.users.get(req.user.sub)});
const apolloServer = new ApolloServer({typeDefs, resolvers, context});


const app = express();

app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  credentialsRequired: false
}));


apolloServer.applyMiddleware({app, path: '/graphql'});

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  const user = db.users.list().find((user) => user.email === email);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({sub: user.id}, jwtSecret);
  res.send({token});
});

app.listen(process.env.BACKEND_PORT, () => console.info(`Server started on port ${process.env.BACKEND_PORT}`));
