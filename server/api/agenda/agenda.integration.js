'use strict';

var app = require('../..');
import request from 'supertest';

var newAgenda;

describe('Agenda API:', function() {

  describe('GET /api/agendas', function() {
    var agendas;

    beforeEach(function(done) {
      request(app)
        .get('/api/agendas')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          agendas = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      agendas.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/agendas', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/agendas')
        .send({
          name: 'New Agenda',
          info: 'This is the brand new agenda!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAgenda = res.body;
          done();
        });
    });

    it('should respond with the newly created agenda', function() {
      newAgenda.name.should.equal('New Agenda');
      newAgenda.info.should.equal('This is the brand new agenda!!!');
    });

  });

  describe('GET /api/agendas/:id', function() {
    var agenda;

    beforeEach(function(done) {
      request(app)
        .get('/api/agendas/' + newAgenda._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          agenda = res.body;
          done();
        });
    });

    afterEach(function() {
      agenda = {};
    });

    it('should respond with the requested agenda', function() {
      agenda.name.should.equal('New Agenda');
      agenda.info.should.equal('This is the brand new agenda!!!');
    });

  });

  describe('PUT /api/agendas/:id', function() {
    var updatedAgenda;

    beforeEach(function(done) {
      request(app)
        .put('/api/agendas/' + newAgenda._id)
        .send({
          name: 'Updated Agenda',
          info: 'This is the updated agenda!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAgenda = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAgenda = {};
    });

    it('should respond with the updated agenda', function() {
      updatedAgenda.name.should.equal('Updated Agenda');
      updatedAgenda.info.should.equal('This is the updated agenda!!!');
    });

  });

  describe('DELETE /api/agendas/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/agendas/' + newAgenda._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when agenda does not exist', function(done) {
      request(app)
        .delete('/api/agendas/' + newAgenda._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
