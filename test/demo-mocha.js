const mocha = require('mocha');
const assert = require('assert');
// mieu ta lai qua trinh kiem tra
describe('mieu ta demo', function() {
    //tao ra mot cai test
    it('kiem tra 2 so cong lai', function() {
        assert(1 + 1 === 2);
    })
})