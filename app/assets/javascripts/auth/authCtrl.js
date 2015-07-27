angular.module("flapperNews")
  .controller("AuthCtrl", [
    "$scope", "$state","Auth","flash","loginService",
    function($scope,$state,Auth,flash,loginService){
      $scope.login = function(){
        Auth.login($scope.user).then(function(){
          loginService.addMessage("You have successfully signed in.");
          $state.go("home");
        },function(error){
          console.log(error.data);
          flash.error = error.data.error;
        });
      };

      $scope.register = function(){
        Auth.register($scope.user).then(function(){
          loginService.addMessage("You have successfully signed up.");
          $state.go("home");
        },function(error){
          console.log(error.data.errors);
          if(error.data.errors['email'])
            flash.error = "Email " + error.data.errors['email'][0];
          else if (error.data.errors['username'])
            flash.error = "Username " + error.data.errors['username'][0];
          else
            flash.error = "Password " + error.data.errors['password'][0];
        });
      };
    }]);
