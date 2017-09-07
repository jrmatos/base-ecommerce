var rp = require('request-promise');
const baseUrl = 'http://localhost:3000/api/products';

const clearProducts = (done) => {
    // remove all products
    rp({
        method: 'DELETE',
        uri: baseUrl
    })
    .finally(() => {
        done();
    });
}

describe('Products Controller', () => {

    beforeEach(clearProducts);
    afterEach(clearProducts);

    it('should add 1 product and list 1 product', done => {
        rp({
            method: 'POST',
            uri: baseUrl,
            body: {
                name: 'test product',
                price: 49
            },
            json: true
        })
        .then(body => {
            expect(body).toBeTruthy();
            return rp(baseUrl);
        })
        .then(body => {
            const bodyJSON = JSON.parse(body);
            expect(bodyJSON.length).toEqual(1);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            done();
        });
    });
});    