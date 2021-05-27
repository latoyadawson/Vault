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
        },
        // budgetItem_id: {
        //     type: DataTypes.INTEGER, 
        //     allowNull: false,
        //     references: {
        //         model: 'budgetItem',
        //         key: 'id'
        //     }
        // }        
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