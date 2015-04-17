/**
 * Created by zhentiw on 22.8.2014.
 */
var app = angular.module('countryApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: './countries_list.html',
            controller: 'CountriesListCtrl'
        }).when('/:countryId', {
            templateUrl: './countryDetail.html',
            controller: 'CountryDetailCtrl'
        }).otherwise({
            redirectTo: '/'
        });
});

app.factory('countries', function($http){
    return{
        link: function(callback){
            $http({
                method: 'GET',
                url: './assets/countries.json'
            }).success(callback);
        },
        find:function(id, callback){
            $http({
                method: 'GET',
                cache: true,
                url: './assets/country_'+parseInt(id,10)+".json"
            }).success(callback);
        }
    };
});

app.directive('country',function(){
    return{
        scope: {
            country: '='
        },
        templateUrl: 'country.html',
        controller: function($scope, countries){
			console.log($scope);
            countries.find($scope.country.id, function(country){
                $scope.flagURL = country.flagURL;
            });
        }
    };
});

app.controller('CountriesListCtrl', function($scope, countries){

    countries.link(function(countries){
        $scope.countries = countries;
    });
});

app.controller('CountryDetailCtrl', function($scope, $routeParams, countries){
    var id = $routeParams.countryId;
    countries.find(id, function(country){
        $scope.country = country;
    }); 
});
