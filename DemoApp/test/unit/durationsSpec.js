'use strict'

describe('durations', function() {

    beforeEach(module('eventsApp'));

    it('shourld return the right duration', inject(function(durationsFilter) {
        expect(durationsFilter(1)).toEqual('Half Hour');
        }))


});
