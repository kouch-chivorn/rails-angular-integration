app.controller('PostsCtrl',['$scope',"post","Post","flash",
    function($scope,post,Post,flash){
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
        Post.likeComment(post,comment).success(function(data){
          if(data.error){
              flash.info = "You've already liked it!";
          }
        });
      };
    }]);
  
