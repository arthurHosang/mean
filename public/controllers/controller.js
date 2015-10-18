/**
 * Created by arthur on 18/10/15.
 */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){
    console.log("Hello World from controller");

    $http.get('/contactlist').success(function(response) {
        console.log("Ive got the data I requested");
        $scope.contactlist = response;
    })
}]);