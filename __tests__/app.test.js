const app = require('../index.js');
const request = require('supertest');

describe('GET /api/notes', function () {
  it('return JSON content with list of all notes with OK STATUS upon calling GET /api/notes', function (done) {
    request(app)
      .get('/api/notes')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET /notes', function () {
  it('return JSON content with list of all notes with OK STATUS upon calling GET /notes', function (done) {
    request(app)
      .get('/notes')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});

describe('GET *', function () {
  it('return HTML with OK STATUS upon calling any wildcard GET *', function (done) {
    request(app)
      .get('/dummy')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});

describe('POST /api/notes', function () {
  let data = {
    title: 'This is a dummy title',
    text: 'This is a dummy text',
  };
  it('respond with 201 CREATED STATUS upon posting data with both "title" and "text" fields under POST /api/notes', function (done) {
    request(app)
      .post('/api/notes')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /api/notes', function () {
  let data = {
    title: 'This is a dummy title',
    dummy: 'This is a dummy text',
  };
  it('respond with 500 INTERNAL SERVER ERROR when "text" field is missing under POST /api/notes', function (done) {
    request(app)
      .post('/api/notes')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /api/notes', function () {
  let data = {
    dummy: 'This is a dummy title',
    text: 'This is a dummy text',
  };
  it('respond with 500 INTERNAL SERVER ERROR when "title" field is missing under POST /api/notes', function (done) {
    request(app)
      .post('/api/notes')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
