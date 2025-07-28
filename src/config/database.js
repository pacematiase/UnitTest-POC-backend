import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('unittest-poc-backend', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default sequelize;
