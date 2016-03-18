angular
	.module("myApp.products")
	.controller("productsController", function(productsService, $scope){
			$scope.products = [];
			productsService.getAll().then(function(products){
				$scope.products = products;
			});
		});