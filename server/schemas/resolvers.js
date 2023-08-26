const { Item, User } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
            console.log('hit')
            return await Item.find({});
        },
        item: async (parent, { id }, context) => {
            try {
                const itemData = await Item.findById(id);

                if (!itemData) {
                    throw new Error('Item with this id not found!');
                };

                return itemData;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        users: async () => {
            return await User.find({})
        },
        user: async (parent, { id }, context) => {
            try {
                const userData = await User.findById(id);

                if (!userData) {
                    throw new Error('User with this id not found!')
                }

                return userData;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
    Mutation: {
        addItem: async (parent, { name, description, price, image }) => {
            try {
                const itemData = await Item.create({
                    name,
                    description,
                    price,
                    image,
                })

                return itemData;
            } catch (error) {
                console.error(error);
                throw error
            }
        },
        updateItem: async (parent, { id, name, description, price, image }, context) => {
            try {
                const itemData = await Item.findByIdAndUpdate(
                    id,
                    { name, description, price, image },
                    { new: true }
                )

                if (!itemData) {
                    throw new Error('Item with this id not found!')
                }

                return itemData;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        deleteItem: async (parent, { id }, context) => {
            try {
                const itemData = await Item.findByIdAndDelete(id)

                if (!itemData) {
                    throw new Error('No item with this id found!')
                }

                return itemData;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
}
module.exports = resolvers