app.controller("CalController",["$scope",function($scope){
  $scope.result = 0;
  $scope.add = function() { $scope.result = parseInt($scope.number1) + parseInt($scope.number2);};
  $scope.subtract = function() { $scope.result = parseInt($scope.number1) - parseInt($scope.number2);};
  $scope.multiply = function() { $scope.result = parseInt($scope.number1) * parseInt($scope.number2);};
  $scope.divide =function(){
    if($scope.number2 == 0){
      if($scope.number1 == 0){
        flash.warn = "Undefined";
      }else{
        flash.warn = "Infinity";
      }
    }else{
      $scope.result = parseInt($scope.number1) / parseInt($scope.number2);
    }
  }
}]);

