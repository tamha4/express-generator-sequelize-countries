const {Model, DataTypes} = require('sequelize');
const sequelize = require('services/database');

class Country extends Model {}

//Initializr the table connected to the attributes
Country.init({
    name: {
        type: DataTypes.STRING
    },
    cca3_code: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'countries', // This is the name of the table in the database
    timestamps: false //include this to ingore created/updated
});

module.exports = Country;