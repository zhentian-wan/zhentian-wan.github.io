/**
 * Created by Answer1215 on 8/23/2014.
 */
var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope) {
    $scope.ctrlFlavor = "blackberry"
})

app.directive("drink", function() {
    return {
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    }
})