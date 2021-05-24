const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

//saving, home, Transportation, lifestyle, etc
Category.init(
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
<<<<<<< HEAD
        },
        total: {
            type: DataTypes.INTEGER,
            references: {
                model: 'budgetItem',
                key: 'budget_amount'
            }
        }

=======
        }
>>>>>>> 1a5cffd60c5545f69c369c4badbd966925953d04
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
)
module.exports = Category;