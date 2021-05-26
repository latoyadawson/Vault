const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bycrpt = require('bcrypt');

class User extends Model {
        //set up method to run on instance data(per user) to check password
    checkPassword(loginPw) {
        return bycrpt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
       
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: {
            //     args: true,
            //     msg: 'Email address already in use!'
            // },
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //passowrd must be atleast four charactesr long
                len: [4]
            }
        }
    },
    {
        hooks: {
            //set up beforeCreate lifecycle 'hook' functinailty
            async beforeCreate(newUserData) {
                newUserData.password = await bycrpt.hash(newUserData.password, 10);
                return newUserData;
            
            },
            // set up beforeUpdate lifecycle "hook" functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bycrpt.hash(updatedUserData.password, 10);
                return updatedUserData;
            
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;