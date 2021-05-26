const User = require('./User');
const Category = require('./Category');
const BudgetItems = require('./BudgetItems');
const Income = require('./Income');

// belongsTo: One To One
// belongsToMany: Many To Many
// HasMany: One To Many
// HasOne: One To One, The FKs will be defined in Target Model


User.hasMany(Income, {
  foreignKey: 'user_id'
});

User.hasMany(BudgetItems, {
foreignKey: 'user_id'
});

Category.hasMany(BudgetItems, {
foreignKey: 'category_id'
});

BudgetItems.belongsTo(Category, {
foreignKey: 'category_id'
});

Income.belongsTo(User, {
foreignKey: 'user_id'
});

module.exports = { User, Category, BudgetItems, Income };

/*
Do we want to break the income down for the user i.e. Uber income
*/




