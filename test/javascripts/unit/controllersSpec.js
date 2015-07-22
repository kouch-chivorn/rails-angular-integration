'use strict';

describe("MainCtrl",function  () {

  beforeEach(module("flapperNews"));

  var scope, controller, service;

  beforeEach(inject(function($rootScope, $controller, Post){
	scope = $rootScope.$new();
	service = Post;
	controller = $controller("MainCtrl", {$scope: scope,Post: service});
  }));

  describe("$scope details when page loads",function(){

  	it("should define @scope.posts", function(){
		console.log(service);
		scope.posts = service.posts;
		expect(scope.posts).toBeDefined();
	});
  	
  	it("should set postsPerPage", function(){
  		expect(scope.postsPerPage).toBe(10);
  	});

  	it("should set page pagination", function(){
  		expect(scope.pagination.current).toBe(1);
  	});
  });

  describe("$scope functions",function(){
  	it("pageChanged", function(){
  		scope.pageChanged(2);
  		console.log(scope);
  		expect(service.getAll(2)).toBeDefined;
  	});

  	it("when title is null addPost", function(){
  		scope.title = null;
  		scope.addPost();
  		expect(service.create()).toBeUndefined;
  	});

  	it("when title is not null addPost", function(){
  		scope.title = "abc";
  		scope.addPost();
  		expect(service.create()).toBeDefined();
  	});
  });
});
