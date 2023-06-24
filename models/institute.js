const {sequelize, DataTypes} = require('../db/connection')

const Institute = sequelize.define('Institute', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING(100),
    id_category: {
        type:DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    id_institute: {
        type: DataTypes.INTEGER(4),
        references: {
            model: 'institute',
            key: 'id'
        }
    },
    id_ubication: {
        type: DataTypes.INTEGER(4),
        references: {
            model: 'ubication',
            key: 'id'
        }
    },
    id_contact: {
        type: DataTypes.INTEGER(4),
        references: {
            model: 'contact',
            key: 'id'
        }
    },
    year_fundation: DataTypes.INTEGER
});

Institute.sync();
