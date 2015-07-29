app.controller('MainCtrl', [
    '$scope','Post',"flash","loginService","$timeout",
    function($scope,Post,flash,loginService,$timeout) {

      if(loginService.getMessage){
        $scope.message = loginService.getMessage();
        flash.success = $scope.message[0];
        loginService.emptyMessage();
      }
      //$scope.data = Post;

      $scope.posts = Post.posts;
      
      $scope.postsPerPage = 10;
      
      $scope.pagination = {
        current: 1
      };

      // $scope.pageChanged = function(newPageNumber){
      //   Post.getAll(newPageNumber);
      // };

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
           	flash.info = "Thanks! You've already like this!";
          }
        })
        .error(function(data){
          flash.info = "Sorry! " + data.error;
        });
      };
      $scope.posts.orderProp = "title";

      // $timeout(function() {
      //   $scope.isDisabled = false;
      //   $scope.myHref = "http://google.com";
      //   $scope.imgSrc = "https://www.google.com/images/srpr/logo11w.png";
      // }, 2000);
    }
  ])
  .controller("MyController",["$scope", "EmailParser", function($scope, EmailParser){
    $scope.$watch("description", function(body){
      if(body){
        //var template = $interpolate(body);
        $scope.previewText = EmailParser.parse(body,{email: $scope.email, title: $scope.title,
                                      author: $scope.author});
      }
    });
  }]);
