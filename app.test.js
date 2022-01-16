const app = require('./index.js');
const request = require('supertest');

describe('GET /notes', () => {
  describe('given an app', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  });
});
