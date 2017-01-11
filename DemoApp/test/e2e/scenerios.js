'use strict';

describe('event registration app', function() {
    describe('events page', function () {
       beforeEach(function () {
            browser.get('http://localhost:8000/#/newEvent')
        })

       it('should have the correct title', function() {
           // var list = element.all(by.repeater('event in events'));
            console.log('doing something');
            expect(true);
        })

        it('should have the currect name', function() {
            var el = element.get(by.name('eventName'));
            //expect(el.getN.equalTo("eventName"));
        })


    })
})