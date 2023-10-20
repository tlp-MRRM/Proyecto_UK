import { sequelize, DataTypes } from '../database/db.js';

export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  INSTITUTE: 'institute'
}

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.ENUM(ROLES.ADMIN, ROLES.USER, ROLES.INSTITUTE),
    defaultValue: ROLES.USER
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  freezeTableName: true
});
