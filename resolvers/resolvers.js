const persons = require('../data/db');

// Resolvers
const resolvers = {
    Query: {
        getPersons: () => {
            return persons;
        },
        getPerson: (id) => {
            console.log('returning person with id: ', id);
            return persons[1];
        }
    }    
}

module.exports = resolvers;