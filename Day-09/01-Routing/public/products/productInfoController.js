angular
	.module("myApp.products")
	.controller("productInfoController", function($scope, productsService, $routeParams){
			var productId = $routeParams.id;
			productsService.getById(productId).then(function(product){
				$scope.product = product;
			});
		});