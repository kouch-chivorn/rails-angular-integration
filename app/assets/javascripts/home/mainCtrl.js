app.controller('MainCtrl', [
    '$scope','Post',"flash","loginService",
    function($scope,Post,flash,loginService) {
      $scope.data = Post;
      $scope.message = loginService.getMessage();
      flash.success = $scope.message[0];
      console.log($scope.message);
      $scope.posts = Post.posts;
      $scope.postsPerPage = 10;
      $scope.pagination = {
        current: 1
      };

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
  }]);
