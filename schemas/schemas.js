const { gql } = require('apollo-server');

// Schema
const typeDefs = gql`

    type Person {
        id: ID
        name: String
        age: Int
    }

    type Query {
        getPersons: [Person]
        getPerson: Person
    }
`;    

module.exports = typeDefs;