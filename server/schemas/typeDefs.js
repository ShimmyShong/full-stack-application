const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        id: ID!
        name: String!
        description: String
        price: Float!
        image: String
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
    }

    type Query {
        items: [Item]
        item (id: ID!): Item
        users: [User]
        user (id: ID!): User
    }

    type Mutation {
        addItem (name: String!, description: String, price: Float!, image: String): Item
        updateItem(id: ID!, name: String, description: String, price: Float, image: String): Item
        deleteItem(id: ID!): Item
    }
`;

module.exports = typeDefs