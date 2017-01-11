'use strict'

eventsApp.directive('eventThumbnail', function() {
   return {
       restrict: "E",
       replace: true,
      // templateUrl: '/templates/directives/eventThumbnail.html',
      template: '<h2 class="span6">{{event.name}}</h2>',
       scope: {
           event: '=',
       }
   }
});
