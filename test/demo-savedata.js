const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');

describe('mieu ta them du lieu', function() {
    it('them du lieu vao co so du lieu', function(done) {
        var character = new PersonChar({
            name: 'linh',
        });
        character.save().then(function() {
            assert(character.isNew == false);
            done();
        })
    })
})