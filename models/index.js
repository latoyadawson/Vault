const User = require('./User');
const Category = require('./Post');
const BudgetItem = require('./BudgetItem');
const Income = require('./Income');

//create associations
User.hasMany(Category, {
    foreignKey: 'user_id'
});
User.belongsToMany(Income, {
    foreignKey: 'user_id'
});

User.hasMany(BudgetItem, {
  foreignKey: 'user_id'
});

Category.belongsTo(, {
    foreignKey: 'category_id'
});

Category.belongsToMany(BudgetItem, {

});

BudgetItem.hasOne(Category, {

});

Income.belongsTo(User, {

});

Income.hasMany(User, {

});

module.exports = { User, Category, BudgetItem, Income };



