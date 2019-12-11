// routers-test.jsconst test = require('tape');
const test = require('tape');

const supertest = require('supertest');
const router = require("../src/server/routers");

test('initialise', (t) => {
    let num = 2;
    t.isEquivalent(num, 2, 'should return 2');
    t.end();
})


test('home route returns a status code of 200', (t) => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("Content-Type", /html/)
        .end((err, res) => {
            t.error(err);
            t.equal(res.statusCode, 200, 'Should return 200');
            t.end();
        });
})


test("check status code is 404", (t) => {
    supertest(router)
        .get('/elephants')
        .expect(404)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err)
            t.equal(res.text, '<h1> Page not found</h1>', 'Page not found');
            t.end();
        })
})