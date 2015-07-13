angular.module("flapperNews")
.controller('PostsCtrl',['$scope',"post","Post",
    function($scope,post,Post){
      $scope.post = post;
      $scope.addComment = function(){
        if(!$scope.body){return;}
        Post.addComment(post.id, {
          author: "Rathanak",
          body: $scope.body,
          like: 0
        }).success(function(comment){
          $scope.post.comments.push(comment);
        });
        $scope.body = "";
      };
      $scope.incrementLikes = function(comment){
        Post.likeComment(post,comment);
      };
    }]);
  
