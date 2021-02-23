const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers/resolvers');
const typeDefs = require('./schemas/schemas');

// server creation
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const hello = 'hello';
        return hello;
    }
});

// start server
server.listen().then((url) => {
    console.log(`Apollo server started at ${url}`);
});