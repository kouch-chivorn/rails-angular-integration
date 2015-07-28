app.controller("NavCtrl", [
    "$scope", "Auth", function($scope, Auth){
    	$scope.signedIn = Auth.isAuthenticated;

    	$scope.logout = Auth.logout;
        
    	Auth.currentUser().then(function(user){
    		$scope.user = user;
    	});

    	$scope.$on("devise:new-registration", function(e, user){
    		$scope.user = user;
    	});

    	$scope.$on("devise:login", function(e, user){
    		$scope.user = user;
    	});

    	$scope.$on("devise:logout", function(e,user){
    		$scope.user = {};
    	});

        $scope.clock = new Date();

        var updateClock = function(){
            var d = new Date();
            $scope.clock = d.getFullYear() + "-"+ (d.getMonth()+1) + "-"+  
            d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        };
        setInterval(function(){
            $scope.$apply(updateClock)
        },1000);

        updateClock();
  	}]);
