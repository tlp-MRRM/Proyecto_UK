const {sequelize, DataTypes} = require('../db')

const career = sequelize.define('career', {
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
        type: DataTypes.STRING,
        allowNull: false
    },
    idTypeCareer: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'typeCareers',
            key: 'id'
        }
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    idTimeUnit: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'timeUnits',
            key: 'id'
        }
    },
    idModality: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model:'modalities',
            key: 'id'
        }
    },
    finalTitle: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idInstitute: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        references: {
            model: 'institutes',
            key: 'id'
        }
    },
    idCareer: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        references: {
            model: 'careers',
            key: 'id'
        }
    }
}, {
    underscore : true
})
career.sync({ force: false }).then(() => {
    console.log('Tabla de Carreras creada');
});
module.exports = career