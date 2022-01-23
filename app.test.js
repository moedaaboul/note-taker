const app = require('./index.js');
const request = require('supertest');

describe('GET /notes', function () {
  it('respond with json containing a list of all notes', function (done) {
    request(app)
      .get('/api/notes')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// describe('GET *', function () {
//   it('respond with json containing a list of all notes', function (done) {
//     request(app).get('/').expect('Content-Type', 'text/html').end(done);
//   });
// });

describe('POST /users', function () {
  let data = {
    title: 'This is a dummy title',
    text: 'This is a dummy text',
  };
  it('respond with 201 created', function (done) {
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

describe('POST /users', function () {
  let data = {
    title: 'This is a dummy title',
    dummy: 'This is a dummy text',
  };
  it('respond with 500 INTERNAL SERVER ERROR when "text" field is missing', function (done) {
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

describe('POST /users', function () {
  let data = {
    dummy: 'This is a dummy title',
    text: 'This is a dummy text',
  };
  it('respond with 500 INTERNAL SERVER ERROR when "title" field is missing', function (done) {
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
