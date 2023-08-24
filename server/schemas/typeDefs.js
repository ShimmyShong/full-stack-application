const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        id: ID!
        name: String!
        description: String!
        price: Float!
        image: String!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }

    type Query {
        items: [Item]
        users: [User]
    }
`;

module.exports = { typeDefs }