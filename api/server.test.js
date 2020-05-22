const request = require('supertest')

const server = require("./server")

const db = require("../data/dbConfig")



beforeEach(()=> {
    return db.migrate.rollback()
        .then(()=> db.migrate.latest())
        .then(()=> db.seed.run());
})

describe('index', () => {
    it('should return status 200',async ()=>{
        const response = await request(server).get("/")
        expect(response.status).toEqual(200)
    })
})
let id;
describe("post",() => {
    it("should return 201", async()=> {
        const add = await request(server).post("/api/pancakes").send({"type":"banana"})
        expect(add.status).toEqual(201)
        expect(add.body).toHaveProperty("id");
        id = add.body.id
    })
})

describe("delete",() => {
    it("should return 200", async()=> {
        const remove = await request(server).delete(`/api/pancakes/${id}`)
        expect(remove.status).toEqual(200)
        expect(remove.body).toMatchObject({message: "deleted"})
    })
})
    
