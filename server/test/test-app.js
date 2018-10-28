
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var should = chai.should();

chai.use(chaiHttp);

describe('GET /friends/<username>', () => { 
  it('should get the friends of smithheig', function(done) {
    chai.request(server)
      .get('/friends/smithheig')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.a('object');
        done();
      });
  }),
  it('should get the friends of edri', function(done){
    chai.request(server)
      .get('/friends/edri')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.a('object');
        done();
      });
  }),
  it('should get an empty object because not found', function(done){
    chai.request(server)
      .get('/friends/asdfasdfasdfasdfuuui')
      .end(function(err, res){
        res.should.have.status(404);
        done();
      });
  })
});