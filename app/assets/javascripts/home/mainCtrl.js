app.controller('MainCtrl', [
    '$scope','Post',"flash","loginService","$timeout",
    function($scope,Post,flash,loginService,$timeout) {

      if(loginService.getMessage){
        $scope.message = loginService.getMessage();
        flash.success = $scope.message[0];
        loginService.emptyMessage();
      }
      $scope.posts = Post.posts;

      $scope.data = Post;
      $scope.postsPerPage = 10;
      $scope.pagination = {
        current: 1
      };

      $scope.isDisabled = true;

      $scope.pageChanged = function(newPageNumber){
        Post.getAll(newPageNumber);
      };

      $scope.addPost = function() {
        if (!$scope.title) {
          return;
        }
        Post.create({
          title: $scope.title,
          link: $scope.link,
          description: $scope.description
        });
        $scope.title = '';
        $scope.link = '';
        $scope.description = '';
      };

      $scope.incrementLikes = function(post) {
        Post.like(post).success(function(data){
          if(data.error){
           	flash.info = "You've already like this!";
          }
        });
      };
      $scope.orderProp = "title";
      $timeout(function() {
        $scope.isDisabled = false;
        $scope.myHref = "http://google.com";
        $scope.imgSrc = "https://www.google.com/images/srpr/logo11w.png";
      }, 2000);
    }
  ])
  .run(function($rootScope){
    $rootScope.truth = "Truth is Life";
  })
  .controller("MyController",["$scope", "EmailParser", function($scope, EmailParser){
    $scope.$watch("description", function(body){
      if(body){
        //var template = $interpolate(body);
        $scope.previewText = EmailParser.parse(body,{email: $scope.email, title: $scope.title,
                                      author: $scope.author});
      }
    });
  }])
  .controller('SomeController', function($scope) {
// anti-pattern, bare value
$scope.someBareValue = 'hello computer' ;

// set actions on $scope itself, this is okay
$scope.someAction = function() {
// sets {{ someBareValue }} inside SomeController and ChildController
$scope.someBareValue = 'hello human, from parent';
};
})
.controller('ChildController', function($scope) {
$scope.childAction = function() {
// sets {{ someBareValue }} inside ChildController
$scope.someBareValue = 'hello human, from child';
};
});
