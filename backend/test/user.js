const mongoose=require("mongoose")
const User=require("../models/user")

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../main');
const should = chai.should();
chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.deleteMany({}, (err) => { 
           done();           
        });        
    });
    describe('/POST user', () => {
        it('it should not POST a user ', (done) => {
            let user = {
                email: "gargi@gmail.com",
                name: "Gargi"
            }
          chai.request(server)
              .post('/api/register')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.a('object');
                    res.body.should.have.property('auth').eql(false);
                done();
              });
        });
        it('it should POST a user ', (done) => {
            let user = {
                email: "gargi@gmail.com",
                name: "Gargi",
                password:'gargi123'
            }
          chai.request(server)
              .post('/api/register')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('auth').eql(true);
                done();
              });
        });
  
    });

});