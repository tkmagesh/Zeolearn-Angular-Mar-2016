var greetModule = angular.module("myApp.greet", ["ngRoute"]);

greetModule.config(function($routeProvider){
	$routeProvider
		.when("/greet", {
			templateUrl : 'greet/greet.html',
			controller : 'greetController'
		});
});

greetModule.controller("greetController", function($scope){
	$scope.username = '';
	$scope.greetMessage = '';
	$scope.greet = function(){
		$scope.greetMessage = 'Hi ' + $scope.username + ', Have a nice day!';
	};
});

greetModule.filter("trimText", function(){
	return function(data){
		return data.length < 30 ? data : data.substr(0,30) + '...';
	};
});