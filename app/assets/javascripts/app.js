angular.module('flapperNews', ['ui.router',"templates","Devise",
	"angular-flash.service","angular-flash.flash-alert-directive",
  "angularUtils.directives.dirPagination"])
  .config(["$stateProvider","$urlRouterProvider",
    function($stateProvider,$urlRouterProvider){
      $stateProvider
        .state('home',{
          url: "/home",
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl'
          // ,
          // resolve: {
          //   postPromise: ["Post", function(Post){
          //     return Post.getAll(1);
          //   }]
          // }
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

