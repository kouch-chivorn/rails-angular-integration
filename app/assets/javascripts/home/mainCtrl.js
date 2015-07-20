angular.module("flapperNews")
.controller('MainCtrl', [
    '$scope','Post',"flash",
    function($scope,Post,flash) {
      Post.getAll(1);
      data = $.parseJSON(Post);
      $scope.totalPosts = data;
      $scope.posts = Post.posts;
     
      console.log($scope.totalPosts);
     $scope.postsPerPage = 10;
     $scope.pagination = {
      current: 1
     };

     $scope.pageChanged = function(newPage){
        Post.getAll(newPage);
     };
      $scope.addPost = function() {
        if (!$scope.title) {
          return;
        }
        Post.create({
          title: $scope.title,
          link: $scope.link
        });
        $scope.title = '';
        $scope.link = '';
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
