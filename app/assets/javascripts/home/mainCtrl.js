angular.module("flapperNews")
.controller('MainCtrl', [
    '$scope','Post',"flash",
    function($scope,Post,flash) {
      $scope.data = Post;
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
  ]);
