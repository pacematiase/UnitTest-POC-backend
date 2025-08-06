// API Endpoints handling module

import { Router } from 'express';
import { add, findAll, getRanking, callNext } from './queueEntry-controller.js';

const queueEntryRouter = Router();

queueEntryRouter.post('/', add);

queueEntryRouter.get('/', findAll);

queueEntryRouter.get('/ranking', getRanking);

queueEntryRouter.post('/callNext', callNext);

export default queueEntryRouter;
