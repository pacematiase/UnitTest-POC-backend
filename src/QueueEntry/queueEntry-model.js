// Database table definition module

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const queueEntryModel = sequelize.define('QueueEntry', {
  queueEntryDni: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  queueEntryDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  queueEntryType: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export { queueEntryModel };
