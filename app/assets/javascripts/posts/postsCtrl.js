angular.module("flapperNews")
.controller('PostsCtrl',['$scope',"$stateParams","Post",
    function($scope,$stateParams,Post){
      $scope.post = Post.posts[$stateParams.id];
      $scope.addComment = function(){
        if(!$scope.body){return;}
        $scope.post.comments.push({
          author: "Rathanak",
          body: $scope.body,
          like: 0
        });
        $scope.body = "";
      };
      $scope.incrementLikes = function(comment){
        comment.like +=1;
      };
    }]);
  
