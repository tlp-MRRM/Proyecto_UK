const {sequelize, DataTypes} = require('../db/connection')

const career = sequelize.define('career', {
    id: {
        type: DataTypes.INTEGER(4),
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_type_career: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'type_career',
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
    id_time_unit: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'time_unit',
            key: 'id'
        }
    },
    id_modality: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model:'modality',
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
            model: 'institute',
            key: 'id'
        }
    },
    id_career: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        references: {
            model: 'career',
            key: 'id'
        }
    }
})
career.sync({ force: false }).then(() => {
    console.log('Tabla de Carreras creada');
});
module.exports = career