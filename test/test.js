//Require the dev-dependencies
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
chai.should();

chai.use(chaiHttp);

describe("GET /api/examples", function() {
  after(function() {
    process.exit(0);
  });

  it("it should GET all the examples", function(done) {
    chai
      .request(server)
      .get("/api/examples")
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.eql(0);
        done();
      });
  });
});
