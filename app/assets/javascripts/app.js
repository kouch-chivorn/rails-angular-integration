 var app = angular.module('flapperNews', ['ui.router',"templates","Devise",
  "angular-flash.service","angular-flash.flash-alert-directive",
  "angularUtils.directives.dirPagination", "emailParser","flapperNews.filters"]);
app.config(["$stateProvider","$urlRouterProvider",
  function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: "/home?page",
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
        ,
        params: {page: "1"},
        resolve: {
          postPromise: ["Post","$stateParams", function(Post,$stateParams){
            return Post.getAll($stateParams.page);
          }]
        }
        
      })
      .state('posts',{
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ["$stateParams", "Post", function($stateParams, Post){
            return Post.get($stateParams.id);
          }]
        }
      })
      .state("login",{
      	url: "/login",
      	templateUrl: "auth/_login.html",
      	controller: "AuthCtrl",
      	onEnter: ["$state", "Auth", function($state, Auth){
      		Auth.currentUser().then(function(){
      			$state.go("home");
      		})
      	}]
      })
      .state("register",{
      	url: "/register",
      	templateUrl: "auth/_register.html",
      	controller: "AuthCtrl",
      	onEnter: ["$state", "Auth", function($state,Auth){
      		Auth.currentUser().then(function(){
      			$state.go("home");
      		})
      	}]
      });
    $urlRouterProvider.otherwise("home");
  }])
	.config(function(flashProvider){
		flashProvider.errorClassnames.push("alert-danger");
		flashProvider.warnClassnames.push("alert-warning");
		flashProvider.successClassnames.push("alert-success");
		flashProvider.infoClassnames.push("alert-info");
	});
  angular.module("emailParser", [])
    .config(["$interpolateProvider",
      function($interpolateProvider){
        $interpolateProvider.startSymbol('{{');
        $interpolateProvider.endSymbol("}}");
      }])
    .factory("EmailParser", ["$interpolate",
      function($interpolate){
        return{
          parse: function(text,context){
            var template = $interpolate(text);
            return template(context);
          }
        }
      }]);
 
