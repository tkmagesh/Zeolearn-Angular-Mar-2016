/* Sync */
var program = (function(){
	function addSync(x,y){
		console.log("[Provider] processing ", x, " and ", y);
		var result = x + y;
		console.log("[Provider] return result");
		return result;
	}

	function addSyncClient(x,y){
		console.log("[Consumer] triggering addSync");
		var result = addSync(x,y);
		console.log("[Consumer] result = ", result);
	}

	function addAsyncCallback(x,y, onResult){
		console.log("[Provider] processing ", x, " and ", y);
		setTimeout(function(){
			var result = x + y;
			console.log("[Provider] return result");
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncCallbackClient(x,y){
		console.log("[Consumer] triggering addAsyncCallback");
		addAsyncCallback(x,y, function(result){
			console.log("[Consumer] result = ", result);
		});
	}

	var addAsyncEvents = (function(){
		var _callbacks = [];
		function addSubscriber(callback){
			_callbacks.push(callback);
		}
		function add(x,y){
			
		}
		return {
			addSubscriber : addSubscriber,
			add : add
		};
	})();

	function addAsyncPromise(x,y){
		console.log("[Provider] processing ", x, " and ", y);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log("[Provider] return result");
				resolveFn(result);
			},3000);
		});
		return promise;
	}

	/*function addAsyncPromise(x,y){
		console.log("[Provider] processing ", x, " and ", y);
		var promise = new Promise();
		askAFriendToResolve(promise);
		return promise;
	}

	function askAFriendToResolve(promise){
		setTimeout(function(){
			var result = x + y;
			console.log("[Provider] return result");
			promise.resolve(result);
		},3000);
	}*/
	
	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	};
})();