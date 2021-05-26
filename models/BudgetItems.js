const { Model, DataTypes, Sequelize } = require('sequelize');
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
            allowNull: true
        },
        budget_amount: {
            type: DataTypes.INTEGER,
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
            allowNull: true,
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
        timestamps: false,
        modelName: 'budgetItems'
    }
    
)



module.exports = BudgetItems;

