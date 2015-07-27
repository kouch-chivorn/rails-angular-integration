app.directive("notEmpty",function(){
  return {
    require: "?ngModel",
    link: function(scope,ele,attrs,ngModel){
      if(!ngModel) return;
      scope.$watch(attrs.ngModel, function(){

      })
    }
  }
})
  .directive('myDirective', function(){
    return {
      retrict: 'E',
      replace: true,
      template: "<a href='http://google.com'> Click me </a>"
    }
  });
