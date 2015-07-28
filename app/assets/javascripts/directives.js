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
      retrict: 'A',
      replace: true,
      scope: {
        myUrl: "@",         //binding strategy
        myLinkText: "@"
      },
      template: '\
      <div>\
        <label> Url: </label>\
        <input type="text" ng-model="myUrl" />\
        <a href="{{myUrl}}"> {{myLinkText}} </a>\
      </div>\
      '
    }
  });
