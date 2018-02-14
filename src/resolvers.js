// The actual implementations of the Queries / Mutations described in schema.js

const channels = [{
  id: "1",
  name: "soccer",
  messages: [],
}, {
  id: "2",
  name: "baseball",
  messages: [],
}];

let nextID = 3;
let msgID = 0;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id === id);
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextID, name: args.name, messages: []};
      ++nextID;
      channels.push(newChannel);
      return newChannel;
    },
    addMessage: (root, { id, message }) => {
      const channel = channels.find(channel => channel.id === id);
      const msg = { id: msgID++, text: message };
      channel.messages.push(msg);
      return channel;
    }
  }
}
