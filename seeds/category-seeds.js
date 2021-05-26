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

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;