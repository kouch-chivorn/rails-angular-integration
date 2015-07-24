angular.module('flapperNews.filters',[])
  .filter('capitalize',function() {
    return function(input){
      if(input){
        return input.replace(/(?:^|\s)\S/g, function(a){ return a.toUpperCase();});
      }
    }
  })
