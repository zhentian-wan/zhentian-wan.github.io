/**
 * Created by Answer1215 on 8/23/2014.
 */
var app = angular.module("phoneApp", []);
app.controller('phoneCtrl',function($scope){
    $scope.callHome = function(message){
        alert(message);
    };
});

app.directive('phone',function(){
    return{
      scope:{
          dial: '&'
      },
      template: '<input type="text" ng-model="value"/>' +
          '<div class="button" ng-click="dial({message:value})">Call home</div>'
    };
});
/**
 * '&' 绑定父scope的controller, 如果出了scope的作用域就不生效了
 * **/