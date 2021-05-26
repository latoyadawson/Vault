const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BudgetItems extends Model {}

//mortgage, rent, utilies, insurance
BudgetItems.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        budget_amount: {
            type: DataTypes.DECIMAL,
            defaultValue: 0
        },
        category_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        user_id:{
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }        
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'budgetItem'
    }
)

module.exports = BudgetItems;
