import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';

import schema from './src/schema';

const PORT = 8080;
const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
