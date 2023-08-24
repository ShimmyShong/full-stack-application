const { Item, User } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
            return await Item.find({});
        },
        users: async () => {
            return await User.find({})
        }
    },
}
module.exports = resolvers