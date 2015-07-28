
  app.controller("NavCtrl", [
    "$scope", "Auth", "flash", function($scope, Auth, flash){
    	$scope.signedIn = Auth.isAuthenticated;
    	$scope.logout = Auth.logout;
        // $scope.user = {
        //     status: false
        // };
        
    	Auth.currentUser().then(function(user){
    		$scope.user = user;
            $scope.user.status = true;
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

        $scope.watch = {
            now: new Date()
        };
        var updateClock = function(){
            $scope.watch ={
                now: new Date()
            };
            //var d = new Date();
            //$scope.watch.now = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
        };

        setInterval(function(){
            $scope.$apply(updateClock);
        }, 1000);

        updateClock();

  	}]);
