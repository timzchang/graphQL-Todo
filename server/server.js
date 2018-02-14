import express from 'express';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';

import { schema } from './src/schema';

const PORT = 7700;
const server = express();
server.use('*', cors({ origin: 'http://localhost:8000' }));  // look this up

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () =>
  console.log(`GraphQL Server listening on http://localhost:${PORT}`)
);
