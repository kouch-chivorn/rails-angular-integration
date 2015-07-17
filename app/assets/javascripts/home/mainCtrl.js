angular.module("flapperNews")
.controller('MainCtrl', [
    '$scope','Post',"flash",
    function($scope,Post,flash) {
     $scope.posts = Post.posts;
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
            console.log(1);
            flash.create("success","You've already liked it!","custom-class");
          }
        });
      };
      $scope.orderProp = "title";
    }
  ]);
