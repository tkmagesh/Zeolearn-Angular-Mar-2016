describe("greetModule", function(){
	beforeEach(module("myApp.greet"));

	describe("greetController", function(){
		it("should initialize username", inject(function($controller){
			//Arrange
			var dummyScope = {};

			//Act
			$controller('greetController', {$scope : dummyScope});

			//Assert
			expect(dummyScope.username).toBeDefined();
		}))
	})

	describe("greetController", function(){
		it("should initialize greetMessage as empty string", inject(function($controller){
			//Arrange
			var dummyScope = {};

			//Act
			$controller('greetController', {$scope : dummyScope});

			//Assert
			expect(dummyScope.greetMessage).toBe('');
		}))
	});

	describe("greetController", function(){
		it("should populate greetMessage when greeted", inject(function($controller){
			//Arrange
			var dummyScope = {};
			var username = 'Magesh';
			var expectedResult = 'Hi Magesh, Have a nice day!';

			//Act
			$controller('greetController', {$scope : dummyScope});
			dummyScope.username = username;
			dummyScope.greet();

			//Assert
			expect(dummyScope.greetMessage).toBe(expectedResult);
		}));
	})
});