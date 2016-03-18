angular
	.module("myApp.products")
	.service("productsService", function($http){
			this.getAll = function(){
				return $http.get("http://localhost:3000/products/")
					.then(function(response){
						return response.data;
					});
			};
			this.getById = function(id){
				return $http
					.get("http://localhost:3000/products/" + id)
					.then(function(response){
						return response.data;
					});

			}
		});
