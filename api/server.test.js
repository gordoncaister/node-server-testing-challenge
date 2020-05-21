const request = require('supertest')
const express = require("express");
const server = express();

const db = require("../data/dbConfig")

server.use(express.json());
describe("server.js",()=>{
    describe('index', () => {
        it('should return status 200',async ()=>{
            const response = await request(server).get("/")
            expect(response.status).toEqual(200)
        })
    })
    
})