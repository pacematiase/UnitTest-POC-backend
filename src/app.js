import express from 'express';
import sequelize from './config/database.js';
import queueEntryRouter from './QueueEntry/queueEntry-routes.js';
import cors from 'cors';

await sequelize.authenticate();
await sequelize.sync({ alter: true });

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost' }));

app.get('/', (req, res) => {
  res.send('Express is working');
});

app.use('/queueEntry', queueEntryRouter);

app.listen(3000, () => {
  console.log('listening in port 3000');
});
