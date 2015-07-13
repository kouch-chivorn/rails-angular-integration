angular.module("flapperNews")
.controller('MainCtrl', [
    '$scope','Post',
    function($scope,Post) {
     $scope.posts = Post.posts;
      $scope.addPost = function() {
        if (!$scope.title) {
          return;
        }
        Post.create({
          title: $scope.title,
          //view: 0,
          //like: 0,
          link: $scope.link
        });
        $scope.title = '';
        $scope.link = '';
      };
      $scope.incrementLikes = function(post) {
        Post.like(post) +=1;
      };
      $scope.orderProp = "title";
    }
  ]);
