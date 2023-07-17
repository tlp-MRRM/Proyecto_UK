const {sequelize, DataTypes} = require('../db')

const institute = sequelize.define('institute', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    abbreviation: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    idCategory: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    idInstitute: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        references: {
            model: 'institutes',
            key: 'id'
        }
    },
    idUbication: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
            model: 'ubications',
            key: 'id'
        }
    },
    idContact: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        references: {
            model: 'contacts',
            key: 'id'
        }
    },
    yearFundation: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    underscore : true
});

institute.sync({ force: false }).then(() => {
    console.log('Tabla de instituto creada');
});
