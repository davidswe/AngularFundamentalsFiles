'use strict';
describe('EditProfileController', function() {

    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));
    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl:function(){}})

    }));

    it('should build gravatar with given email  ',
        function () {

            $controllerConstructor("EditProfileController", { '$scope':scope, gravatarUrlBuilder: mockGravatarUrlBuilder})
            var email = 'joe@bob.com';
            scope.getGravatarUrl(email);

            expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
        })
})