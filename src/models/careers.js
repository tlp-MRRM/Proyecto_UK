import { sequelize, DataTypes } from '../connections/db.js';
import { Modality } from './Modality.js';
import { TimeUnit } from './TimeUnit.js';
import { TypeCareer } from './TypeCareer.js';

export const Career = sequelize.define('Career', {
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
            model: 'TypeCareer',
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
            model: 'TimeUnit',
            key: 'id'
        }
    },
    id_modality: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        references: {
            model: 'Modality',
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
            model: 'Institute',
            key: 'id'
        }
    },
    id_career: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        references: {
            model: 'Career',
            key: 'id'
        }
    }
}, {
    freezeTableName: true,
}
)
Career.hasOne(TypeCareer)
Career.hasOne(Modality)
Career.hasOne(TimeUnit)
Career.sync({ force: false }).then(() => {
    console.log('Tabla de Carreras creada');
});

