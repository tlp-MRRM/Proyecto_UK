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
    id_type_career: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'type_careers',
            key: 'id'
        }
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    },
    id_timeUnit: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'time_units',
            key: 'id'
        }
    },
    id_modality: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model:'modalities',
            key: 'id'
        }
    },
    final_title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_institute: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        references: {
            model: 'institutes',
            key: 'id'
        }
    },
    id_career: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        references: {
            model: 'careers',
            key: 'id'
        }
    }
})
career.sync({ force: false }).then(() => {
    console.log('Tabla de Carreras creada');
});

module.exports = career