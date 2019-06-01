var userData = {
    name: faker.name.firstName()
}
var sampleData = {}

describe("New Controller api unit Testing.", () => {
    it("Save New Data.", (done) => {
        chai.request(adminUrl + "New")
            .post("/")
            .send(userData)
            .end(function(err, res) {
                sampleData = res.body
                assert.equal(res.statusCode, 200)
                done()
            })
    })
    it("Update New.", (done) => {
        chai.request(adminUrl + "New")
            .put("/" + sampleData._id)
            .send({
                name: sampleData.name + "" + "New"
            })
            .end(function(err, res) {
                assert.equal(res.statusCode, 200)
                done()
            })
    })
    it("Get one New.", (done) => {
        chai.request(adminUrl + "New")
            .get("/" + sampleData._id)
            .send()
            .end(function(err, res) {
                assert.equal(res.statusCode, 200)
                done()
            })
    })
    it("Search New.", (done) => {
        chai.request(adminUrl + "New")
            .post("/search")
            .send({
                query: {
                    name: sampleData.name
                }
            })
            .end(function(err, res) {
                assert.equal(res.statusCode, 200)
                done()
            })
    })
    it("Delete All New.", (done) => {
        chai.request(adminUrl + "New")
            .delete("/")
            .end(function(err, res) {
                assert.equal(res.statusCode, 200)
                done()
            })
    })
})
