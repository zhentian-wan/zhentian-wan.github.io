var app = angular.module('countryApp', ['ngRoute']);

//切换模板，但是页面并不刷新
//每一个模板都对应一个controller
app.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'country-list.html',
			controller: 'CountryListCtrl'
		}).when('/:countryId',{
			templateUrl: 'country-detail.html',
			controller: 'CountryDetailCtrl'
		}).otherwise({
			redirectTo: '/'
		});
});

//service (factory) 用来获取数据，可以使用http method
      app.factory('countries', function($http){
        return {
          list: function (callback){
            $http({
              method: 'GET',
              url: 'countries.json',
              cache: true
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: 'country_' + id + '.json',
              cache: true
            }).success(callback);
          }
        };
      });

//自定义标签, 和所在的contrller绑定

app.directive('country', function(){
	return{
		restrict: "A",
		scope:{
			country: "="
		},
		templateUrl: 'country.html',
		controller: function($scope,countries ){
			countries.find($scope.country.id, function(country){
				$scope.country.flagURL = country.flagURL;
			});
		}
	};
});


//countries 是factory 的injection
//所以可以call factory的function
//factory 取出的数据全部都放入countries中了
app.controller('CountryListCtrl', function($scope, countries){
	countries.list(function(countries){
		$scope.countries = countries;
	});
});

app.controller('CountryDetailCtrl', function($scope, $routeParams, countries){
	countries.find($routeParams.countryId,function( country){
		$scope.c = country;
	});
});