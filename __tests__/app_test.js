// @format

const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  test('it responds with 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
    app.close();
  });
});
