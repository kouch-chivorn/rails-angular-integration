angular.module("flapperNews")
.controller('MainCtrl', [
    '$scope','Post',"flash","$location",
    function($scope,Post,flash,$location) {
    	$scope.perPage = parseInt($location.search().perPage, 10) || 5;
      $scope.page = parseInt($location.search().page, 10) || 0;
      $scope.clientLimit = 250;

      $scope.$watch('page', function(page) { $location.search('page', page); });
      $scope.$watch('perPage', function(page) { $location.search('perPage', page); });
      $scope.$on('pagination:loadPage', function (event, status, config) {
  // config contains parameters of the page request
  console.log(config.url);
  // status is the HTTP status of the result
  console.log(status);
});
      $scope.$on('$locationChangeSuccess', function() {
        var page = +$location.search().page,
          perPage = +$location.search().perPage;
        if(page >= 0) { $scope.page = page; };
        if(perPage >= 0) { $scope.perPage = perPage; };
      });
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
           	flash.info = "You've already like this!";
          }
        });
      };
      $scope.orderProp = "title";
    }
  ]);
