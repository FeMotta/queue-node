import 'dotenv/config';

import express from 'express';

import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';

import Queue from './app/lib/Queue';
import './config/prisma';

import routes from './routes';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: Queue.queues.map((queue) => new BullAdapter(queue.bull)),
  serverAdapter,
});

const app = express();

app.use(express.json());
app.use(routes);

app.use('/admin/queues', serverAdapter.getRouter());

app.listen(3000, () => {
  console.log('🚀 Server ready at: http://localhost:3000');
});
