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
		}));

		it("should initialize greetMessage as empty string", inject(function($controller){
			//Arrange
			var dummyScope = {};

			//Act
			$controller('greetController', {$scope : dummyScope});

			//Assert
			expect(dummyScope.greetMessage).toBe('');
		}));

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

	describe("trimTextFilter", function(){
		it("should return the original string for short strings", inject(function($filter){
			//Arrange
			var input = 'short string',
				expectedOutput = 'short string',
				trimText = $filter('trimText');

			//Act
			var actualOutput = trimText(input);

			//Assert
			expect(actualOutput).toBe(expectedOutput);
		}));

		it("should return the truncated string for long strings", inject(function($filter){
			//Arrange
			var input = 'This is a long string for testing the filter',
				expectedOutput = 'This is a long string for test...',
				trimText = $filter('trimText');

			//Act
			var actualOutput = trimText(input);

			//Assert
			expect(actualOutput).toBe(expectedOutput);
		}));
	});

	
});