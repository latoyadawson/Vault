const { Category } = require('../models');

const categoryData = [
    {
        name:  'Savings'
    },
    {
        name:  'Housing'
    },
    {
        name:  'Transportation'
    },
    {
        name:  'Lifestyle'
    }
];

const seedCategory = () => Post.bulkCreate(categoryData);

module.exports = seedCategory;