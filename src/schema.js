import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  type Channel {
    id: ID!               # "!" denotes required field
    name: String
    messages: [Message]!  # "[]" means list of
  }

  type Message {
    id: ID!
    text: String
  }

  # This type specifies the entry points into our API
  type Query {
    channels: [Channel]
    channel(id: ID!): Channel
  }

  # mutation root type, used to define all mutations.
  type Mutation {
    # A mutation to add a new channel to the list of channels
    addChannel(name: String!): Channel
    addMessage(id: String!, message: String): Channel
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
