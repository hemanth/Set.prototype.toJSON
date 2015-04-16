'use strict';
var assert = require('assert');
require('./');
var mySet = new Set();
mySet.add(NaN);
mySet.add(1);

it('should do a toJSON', function () {
	assert.deepEqual(mySet.toJSON()["1"],1);
});
