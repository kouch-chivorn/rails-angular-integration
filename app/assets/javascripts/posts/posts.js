angular.module("flapperNews")
 .factory('Post', ["$http", function($http) {
    var o = {
      posts: []
    };

    o.getAll = function(){
      return $http.get("/posts.json").success(function(data){
        angular.copy(data, o.posts);
      });
    };

    o.create = function(post){
      return $http.post("/posts.json", post).success(function(data){
        o.posts.push(data);
      });
    };

    o.like = function(post){
      return $http.put("/posts/" + post.id + "/like.json")
        .success(function(data){
          if(!data.error){
            post.like +=1;
          }      
        });
    };

    o.get = function(id){
      return $http.get("/posts/" + id + ".json").then(function(res){
        return res.data;
      });
    };

    o.addComment = function(id, comment) {
      return $http.post("/posts/" + id + "/comments.json", comment);
    };

    o.likeComment = function(post, comment){
      return $http.put("/posts/" + post.id + "/comments/" + comment.id + "/like.json")
        .success(function(data){
          comment.like += 1;
        });
    };
    return o;
  }]);
