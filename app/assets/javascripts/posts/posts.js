app.factory('Post', ["$http", function($http) {
        var o = {
            posts: []
            // ,
            // totalCount: 0
        };

        // o.getAll = function(pageNumber) {
        //     return $http.get("/posts.json?page="+pageNumber).success(function(result) {
        //         o.totalCount = result.Count;
        //         angular.copy(result.Posts, o.posts);
        //     });
        // };
        o.getAll = function() {
            return $http.get("/posts.json").success(function(result) {
                angular.copy(result.Posts, o.posts);
            });
        };

        o.create = function(post) {
            return $http.post("/posts.json", post).success(function(data) {
                o.posts.push(data);
            });
        };

        o.like = function(post) {
            return $http.put("/posts/" + post.id + "/like.json")
                .success(function(data) {
                    if (!data.error) {
                        console.log(data);
                        post.like += 1;
                    }
                })
                .error(function(data){
                    console.log(data.error);
                });
        };

        o.get = function(id) {
            return $http.get("/posts/" + id + ".json").then(function(res) {
                return res.data;
            });
        };

        o.addComment = function(id, comment) {
            return $http.post("/posts/" + id + "/comments.json", comment);
        };

        o.likeComment = function(post, comment) {
            return $http.put("/posts/" + post.id + "/comments/" + comment.id + "/like.json")
                .success(function(data) {
                    if(!data.error){
                        comment.like += 1;
                    }
                });
        };
        return o;
    }]);
