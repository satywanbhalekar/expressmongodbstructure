const chai = require ('chai');
const chaihttp = require ('chai-http');
const mocha = require ('mocha');

const server = require("../app");
const token = ""

chai.should()

describe("men table apis", ()=> {
    describe("post /mens ", ()=>{
       const payload= {
            ranking: 15,
            name: "satyawan bhalekar",
            dob: "06 MAR 1996",
            country: "USA",
            score: "1477"
        }

        it("should be post new user to mens table", (done)=>{
            chai.request(server)

            .post("/mens")
            .set("Authorization", "Bearer "+ token)
            .send(payload)
            .end((err, response)=>{
                response.should.have.status(200)
                response.body.should.be("object")
                response.body.should.have.property("message")
                response.body.should.have.property("error")
                response.body.should.have.property("result")

            })
        })
    })
})