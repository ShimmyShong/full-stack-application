const { Item, User } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find({});
        },
        users: async () => {
            return User.find({})
        }
    },
}

module.exports = resolvers;