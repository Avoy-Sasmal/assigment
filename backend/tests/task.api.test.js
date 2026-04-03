import express from 'express';
import request from 'supertest';
import taskRoutes from '../src/routes/routes.js';

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

describe('Task API routes', () => {
  test('POST /api/tasks validates title', async () => {
    const res = await request(app).post('/api/tasks').send({ description: 'No title' });
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Title is required');
  });

  test('POST /api/tasks returns JSON response', async () => {
    const res = await request(app).post('/api/tasks').send({ description: 'Missing title' });
    expect(res.headers['content-type']).toContain('application/json');
  });
});
