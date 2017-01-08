/**
 * Created by bsjoe on 1/8/17.
 */

eventsApp.controller('EditEventController',

    function EditEventController($scope){

     $scope.saveEvent = function(event, newEventForm) {
         console.log(newEventForm);
        if(newEventForm.$valid) {
         window.alert('event ' + event.name + ' saved!');
        }
     };

     $scope.canceEdit = function() {
         window.location = "/EventDetails.html";
     }
  }
)
