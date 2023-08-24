const db = require('../config/connection');
const { Item } = require('../models')

const itemData = require('./itemSeed.json');

db.once('open', async () => {
    await Item.deleteMany({});

    const items = await Item.insertMany(itemData);

    console.log('Items seeded')
    process.exit(0)
})