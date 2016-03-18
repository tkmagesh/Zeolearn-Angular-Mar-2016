angular
	.module("myApp.customers", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
			.when("/customers", {
				/*template : '<h3>Customers</h3>'*/
				templateUrl : 'customers/templates/customersTemplate.html'
			})
	});