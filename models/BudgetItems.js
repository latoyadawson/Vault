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
            type: DataTypes.DECIMAL,
            defaultValue: 0
        },
        date: {
            type: DataTypes.DATEONLY(3),
            defaultValue: Sequelize.NOW
            
        },
        category_id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'budgetItems'
    }
)

module.exports = BudgetItems;

