import Task from '../src/models/task.model.js';

describe('Task model', () => {
  test('requires title', () => {
    const task = new Task({});
    const err = task.validateSync();

    expect(err.errors.title).toBeDefined();
  });

  test('sets default category', () => {
    const task = new Task({ title: 'Test task' });
    expect(task.category).toBe('personal');
  });
});
