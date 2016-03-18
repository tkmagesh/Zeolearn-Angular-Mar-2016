angular
	.module("routingApp", ["ngRoute", "myApp.products", "myApp.customers"])
	.config(function($routeProvider){
		$routeProvider
			
			
			.otherwise({
				redirectTo : '/products'
			});
	});
		
		
