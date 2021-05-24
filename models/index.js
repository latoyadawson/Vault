const User = require('./User');
const Category = require('./Category');
const BudgetItems = require('./BudgetItems');
const Income = require('./Income');

//create associations
User.hasMany(Category, {
    foreignKey: 'user_id'
});
User.hasMany(Income, {
    foreignKey: 'user_id'
});

User.hasMany(BudgetItems, {
  foreignKey: 'user_id'
});

Category.hasMany(BudgetItems, {
  foreignKey: 'category_id'
});

// BudgetItem.hasOne(Category, {
//   foreignKey: 'category_id'
// });

// Income.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Income.hasOne(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Category, BudgetItems, Income };



